import React, {
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
} from "react";
//Libs
import Select from "react-select";
//Helpers
import { filterTones, filterChords } from "../helpers/songSearchFunctions";
import { getData } from "../helpers/Api";

//Components
import SongDetails from "./SongDetails";

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

const options = [
  { value: "all", label: "Tones/Chords" },
  { value: "tones", label: "Tones" },
  { value: "chords", label: "Chords" },
];

const SongSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<SongsType>([]);
  const [matches, setMatches] = useState<SongsType>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterBy, setFilterBy] = useState<string>("all");

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  // useEffect(() => {
  //   const filterList = {
  //     chords: filterChords(songs, search),
  //     tones: filterTones(songs, search),
  //   };

  //   console.log(filterList.tones);
  // }, [songs, search]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      inputRef.current!.focus();
      return;
    }

    const tonesMatched = filterTones(songs, search);
    const chordMatched = filterChords(songs, search);

    const createMatches = (...filterMatches: SongsType[]) => {
      const allMatches: SongsType = filterMatches.flatMap((filterMatch) => {
        return filterMatch.map((filter) => {
          return filter;
        });
      });

      //Create a unique array of elements
      const uniq = (a: SongsType) => {
        return Array.from(new Set(a));
      };

      setMatches(uniq(allMatches));
    };

    if (filterBy === "chords") {
      createMatches(chordMatched);
    } else if (filterBy === "tones") {
      createMatches(tonesMatched);
    } else {
      createMatches(tonesMatched, chordMatched);
    }

    e.currentTarget.reset();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;

    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|([acdefghijklnopqrtvwxyz])|([H-L])|([N-Z])|([0])/g;

    if (charsRegx.test(currentValue)) {
      e.currentTarget.value = "";
      currentValue = "";
      setSearch("");
      return;
    } else {
      setSearch(currentValue);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="search-bar">
          <Select options={options} onChange={(e) => handleSelectFilter(e)} />
          <input
            type="text"
            name="search"
            placeholder="Tonalidad o acordes"
            onChange={handleSearch}
            value={search}
            ref={inputRef}
          />
        </div>
        <input type="submit" value="Buscar" />
      </form>
      {matches && !loading && <SongDetails matches={matches} />}
    </div>
  );
};

export default SongSearch;
