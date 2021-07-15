import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { getData } from "../helpers/Api";
import SongDetails from "./SongDetails";
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

    if (!search) return;

    const filterTones = () => {
      let matches: number[] = [];
      let songsList = songs.map((song) => {
        return song;
      });

      songs
        .map((song) => {
          return song.tones.filter((tone) => {
            return tone.includes(search);
          });
        })
        .filter((el, idx) => {
          return el.length > 0 && matches.push(idx);
        });

      return matches.map((match) => songsList[match]);
    };

    const filterChords = () => {
      let matches: number[] = [];
      let songsList = songs.map((song) => {
        return song;
      });

      songs
        .map((song) => {
          return song.chords.filter((chords) => {
            return chords.includes(search);
          });
        })
        .filter((e, idx) => {
          return e.length > 0 && matches.push(idx);
        });

      return matches.map((match) => songsList[match]);
    };

    const createMatches = () => {
      let chordMatched = filterChords();
      let tonesMatched = filterTones();

      let allMatches = [...chordMatched, ...tonesMatched];
      //Crate a unique array of elements
      const uniq = (a: SongsType) => {
        return Array.from(new Set(a));
      };

      setMatches(uniq(allMatches));
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
        <input
          type="text"
          name="search"
          placeholder="Buscar por tonos, acordes o cancion"
          onChange={handleSearch}
        />
        <input type="submit" value="Buscar" />
      </form>
      {matches && !loading && <SongDetails matches={matches} />}
    </div>
  );
};

export default SongSearch;
