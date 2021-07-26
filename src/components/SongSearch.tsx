import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  FormEvent,
  ChangeEvent,
} from "react";

//Libs
import Select from "react-select";
import { FaSearch } from "react-icons/fa";
//Helpers
import {
  filterTones,
  filterChords,
  createMatches,
  filterResultBar,
} from "../helpers/songSearchFunctions";
import { getData } from "../helpers/Api";

//Components
import SongDetails from "./SongDetails";

//Types
export type SongsType = {
  id: number;
  name: string;
  chords: string[];
  tones: string[];
}[];

type MyOption = {
  label: string;
  value: string;
};

type filterList = {
  [prop: string]: () => void;
};

const options = [
  { value: "all", label: "Tones/Chords" },
  { value: "tones", label: "Tones" },
  { value: "chords", label: "Chords" },
];

const SongSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<SongsType>([]);

  const [, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [filterBy, setFilterBy] = useState<string>("all");
  const [matches, setMatches] = useState<SongsType>([]);
  const [inputResults, setInputResults] = useState<string[]>([]);
  const [formIsSubmited, setFormIsSubmited] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);

    getData()
      .then((songs) => {
        setLoading(false);
        setSongs(songs);
      })
      .catch((error) => {
        setLoading(true);
        setError(error);
      });
  }, []);

  const handleSelectFilter = (e: MyOption | null) => {
    setFilterBy(e!.value);
  };

  const tonesMatched = useMemo(
    () => filterTones(songs, search),
    [songs, search]
  );
  const chordMatched = useMemo(
    () => filterChords(songs, search),
    [songs, search]
  );

  const filterList: filterList = {
    chords: () => createMatches(setMatches, chordMatched),
    tones: () => createMatches(setMatches, tonesMatched),
    all: () => createMatches(setMatches, tonesMatched, chordMatched),
  };
  const filter_default = "all";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      setFormIsSubmited(false);
      inputRef.current!.focus();
      return;
    }
    setFormIsSubmited(true);
    e.currentTarget.reset();
    return filterList[filterBy] ? filterList[filterBy]() : filter_default;
  };

  useEffect(() => {
    let results: string[];
    if (search) {
      results = filterResultBar(chordMatched, tonesMatched, search)[filterBy];
      results && setInputResults(results);
    }
  }, [search, chordMatched, tonesMatched, filterBy]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    setFormIsSubmited(false);

    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|(\$+)|(\*+)|(\?+)|(\^+)|(\[+)|(\]+)|(\\+)|(\|+)|(\(+)|(\)+)([acdefghijklnopqrtvwxyz])|([H-L])|([N-Z])|([0])/g;

    if (charsRegx.test(currentValue)) {
      e.currentTarget.value = "";
      currentValue = "";
      setSearch("");
      return;
    } else {
      setSearch(currentValue);
    }
  };

  useEffect(() => {
    //Handling close the search matches bar
    document.addEventListener("click", (e) => {
      e.target !== searchResultsRef.current ?? inputRef.current
        ? setFormIsSubmited(true)
        : setFormIsSubmited(false);
    });
  }, []);

  React.useEffect(() => {
    let count = 0;
    let parentHeight = searchResultsRef.current?.getBoundingClientRect().height;
    let y =
      searchResultsRef.current?.children[0]?.getBoundingClientRect().height;

    if (search) {
      setTimeout(() => {
        y =
          searchResultsRef.current?.children[0]?.getBoundingClientRect().height;
        parentHeight = searchResultsRef.current?.getBoundingClientRect().height;
      }, 50);

      // console.log(count, parentHeight, y);
      searchResultsRef.current?.addEventListener("scroll", () => {
        count = searchResultsRef.current!.scrollTop;
      });

      document.addEventListener("keydown", (e) => {
        searchResultsRef.current?.focus();

        if (e.key === "ArrowDown") {
          if (y! - parentHeight! <= count) return;

          searchResultsRef.current?.scroll(0, (count = count + 25));
        }

        if (e.key === "ArrowUp") {
          if (count <= 0) {
            count = 25;
          }

          searchResultsRef.current?.scroll(0, (count = count - 25));
        }
      });
    }
  }, [search]);

  const handleSearchBar = (inputResult: string) => {
    setSearch(inputResult);
    setFormIsSubmited(true);
  };

  return (
    <div className="song-search-container">
      <section>
        <p>Un simple buscador de canciones por tonalidad o acordes.</p>
      </section>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="search-bar">
          <div className="search-bar-content">
            <Select options={options} onChange={(e) => handleSelectFilter(e)} />
            <input
              type="text"
              name="search"
              placeholder="Tonalidad o acordes"
              onChange={handleSearch}
              value={search}
              ref={inputRef}
              autoComplete="off"
            />
          </div>
          <button type="submit">
            <FaSearch />
          </button>
        </div>
        <div className="search-matches-input" ref={searchResultsRef}>
          {search ? (
            formIsSubmited ? null : (
              <ul>
                {inputResults.map((inputResult, idx) => (
                  <li key={idx} onClick={() => handleSearchBar(inputResult)}>
                    {inputResult}
                  </li>
                ))}
              </ul>
            )
          ) : null}
        </div>
      </form>
      {matches && !loading && <SongDetails matches={matches} />}
    </div>
  );
};

export default SongSearch;
