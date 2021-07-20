import React, {
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
} from "react";
import { getData } from "../helpers/Api";
import SongDetails from "./SongDetails";
import { filterTones, filterChords } from "../helpers/songSearchFunctions";
export type SongsType = {
  id: number;
  name: string;
  chords: string[];
  tones: string[];
}[];

const SongSearch: React.FC = () => {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState<SongsType>([]);
  const [matches, setMatches] = useState<SongsType>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      inputRef.current!.focus();
      return;
    }

    const chordMatched = filterChords(songs, search);
    const tonesMatched = filterTones(songs, search);

    const createMatches = () => {
      let allMatches = [...chordMatched, ...tonesMatched];
      //Crate a unique array of elements
      const uniq = (a: SongsType) => {
        return Array.from(new Set(a));
      };

      setMatches((prev) => uniq(allMatches));
    };

    createMatches();

    e.currentTarget.reset();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;

    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|([acdefghijklnopqrtuvwxyz])|([H-L])|([N-Z])|0/g;

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
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <select name="filter">
            <option value="all">All</option>
            <option value="chords">Acordes</option>
            <option value="tonalidad">Tonalidad</option>
          </select>
          <input
            type="text"
            name="search"
            placeholder="Buscar por tonos o acordes"
            onChange={handleSearch}
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
