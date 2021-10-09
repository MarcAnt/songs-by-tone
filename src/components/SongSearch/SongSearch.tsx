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

import { getFilterBy, getTonesAndChords } from "../../helpers/Api";
import { songSearchRegx } from "../../helpers/regularExp";
import { MyOption, options, styles } from "../../helpers/reactSelectOptions";

//Components
import SongDetails from "../SongDetails";
import { SearchWrapper } from "./SongSearch.styles";

//Loader
import Loader from "../Loader/Loader";
import SearchMatches from "../SearchMatches/SearchMatches";
import useNearScreen from "../../Hooks/useNearScreen";
import {
  filterChords,
  filterResultBar,
  filterTones,
} from "../../helpers/songSearchFunctions";
//Types
export type SongsType = {
  id: number;
  name: string;
  chords: string[];
  tones: string[];
}[];

const SongSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<SongsType>([]);

  const [, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [filterBy, setFilterBy] = useState<string>("all");
  const [matches, setMatches] = useState<SongsType>([]);
  const [inputResults, setInputResults] = useState<string[]>([]);
  const [formIsSubmited, setFormIsSubmited] = useState<boolean>(false);

  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const visorRef = useRef<HTMLDivElement>(null);

  const [counter, setCounter] = useState(1);

  const { isNearScreen, setShow } = useNearScreen({
    distance: "0",
    externalRef: visorRef,
  });

  //Detect the route and focus on main input | crear focus en el input al estar en la ruta
  useEffect(() => {
    if (location.pathname === "/") inputRef.current?.focus();
  }, [location, search]);

  //Peticion para la busquedas
  useEffect(() => {
    if (!formIsSubmited) return;
    setLoading(true);
    try {
      setError(false);
      getFilterBy(filterBy, search, counter).then((sgns) => {
        setSongs((prev) => [...prev, ...sgns]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [search, filterBy, counter, formIsSubmited]);

  //Controlar para el scroll infinito
  useEffect(() => {
    if (isNearScreen) {
      setCounter((prev) => prev + 1);
    }
  }, [isNearScreen, formIsSubmited]);

  //Busqueda para la barra de resultados
  useEffect(() => {
    try {
      getTonesAndChords(search)
        .then((songs) => setMatches(songs))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    let results: string[];

    results = filterResultBar(
      filterChords(matches, search),
      filterTones(matches, search),
      search
    )[filterBy];
    results && setInputResults(results);
  }, [filterBy, matches, search]);

  //Selected filter | filtro seleccionado
  const handleSelectFilter = (e: MyOption | null) => {
    setFilterBy(e!.value);
    setCounter(1);
    setSongs([]);
  };

  //Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      setFormIsSubmited(false);
      inputRef.current!.focus();
      return;
    }
    setFormIsSubmited(true);
    //Si el formulario no ha sido enviado, no se borran los valores
    if (!formIsSubmited) {
      setShow(false);
      setCounter(1);
      setSongs([]);
    }
    e.currentTarget.reset();
  };

  //Set search term
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
  //Set search term clicked in search bar
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

      {loading ? (
        <Loader />
      ) : (
        <SongDetails matches={songs} scrollInfiniteRef={visorRef} />
      )}
    </SearchWrapper>
  );
};

export default SongSearch;
