import React, {
  useEffect,
  useState,
  useRef,
  FormEvent,
  ChangeEvent,
} from "react";

//Libs
import Select from "react-select";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

//Helpers
import {
  filterTones,
  filterChords,
  filterResultBar,
  filterOnSubmit,
} from "../../helpers/songSearchFunctions";
import { getData } from "../../helpers/Api";
import { songSearchRegx } from "../../helpers/regularExp";
import { MyOption, options, styles } from "../../helpers/reactSelectOptions";

//Components
import SongDetails from "../SongDetails";
// import { resultsDropdown } from "../../helpers/handleResultDropdown";
import { SearchWrapper } from "./SongSearch.styles";

//Loader
import Loader from "../Loader/Loader";
import SearchMatches from "../SearchMatches/SearchMatches";
//Types
export type SongsType = {
  id: number;
  name: string;
  chords: string[];
  tones: string[];
}[];

const filter_default = "all";

const SongSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<SongsType>([]);

  const [, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [filterBy, setFilterBy] = useState<string>("all");
  const [matches, setMatches] = useState<SongsType>([]);
  const [inputResults, setInputResults] = useState<string[]>([]);
  const [, setFormIsSubmited] = useState<boolean>(false);

  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // const searchResultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (search === "") return;
    try {
      getData(signal)
        .then((songs) => {
          setLoading(false);
          setSongs(songs);
        })
        .catch((error) => {
          setLoading(true);
          setError(error);
        });
    } catch (error) {
      setError(true);
    }
    return () => {
      setSongs([]);
      abortController.abort();
    };
  }, [search]);

  const handleSelectFilter = (e: MyOption | null) => {
    setFilterBy(e!.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      setFormIsSubmited(false);
      inputRef.current!.focus();
      return;
    }
    setFormIsSubmited(true);
    e.currentTarget.reset();

    return filterOnSubmit(
      setMatches,
      filterChords(songs, search),
      filterTones(songs, search)
    )[filterBy]
      ? filterOnSubmit(
          setMatches,
          filterChords(songs, search),
          filterTones(songs, search)
        )[filterBy]()
      : filter_default;
  };

  useEffect(() => {
    //Filter in result matches
    let results: string[];
    if (search) {
      results = filterResultBar(
        filterChords(songs, search),
        filterTones(songs, search),
        search
      )[filterBy];
      results && setInputResults(results);
    }

    return () => {
      results = [];
      setInputResults([]);
    };
  }, [search, songs, filterBy]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    setFormIsSubmited(false);

    if (songSearchRegx.test(currentValue)) {
      e.currentTarget.value = "";
      currentValue = "";
      setSearch("");
      return;
    } else {
      setSearch(currentValue);
    }
  };

  useEffect(() => {
    //Detect the route to focus input
    if (location.pathname === "/") inputRef.current?.focus();

    //handle scroll for the dropdown for search results
    // resultsDropdown(search, searchResultsRef);
  }, [location, search]);

  const handleSearchBar = (inputResult: string) => {
    setSearch(inputResult);
  };

  return (
    <SearchWrapper>
      <section>
        <p>Un simple buscador de canciones por tonalidad o acordes.</p>
      </section>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="search-bar">
          <div className="search-bar-content">
            <Select
              options={options}
              placeholder="Seleccionar"
              defaultValue={options[0]}
              onChange={(e) => handleSelectFilter(e)}
              styles={styles}
            />
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
        <SearchMatches
          searchMatchesResults={inputResults}
          inputRef={inputRef}
          handleSearchBar={handleSearchBar}
          inputValue={search}
          maxHeight="200px"
          position="absolute"
          top="5.55rem"
        />
      </form>
      {loading ? <Loader /> : <SongDetails matches={matches} />}
    </SearchWrapper>
  );
};

export default SongSearch;
