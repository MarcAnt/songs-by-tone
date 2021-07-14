import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";

type SongsType = {
  id: number;
  name: string;
  chords: string[];
  tones: string[];
}[];

const SongSearch: React.FC = () => {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState<SongsType>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "http://localhost:5000/songs";

    let getAll = async (url: string) => {
      return await (await fetch(url)).json();
    };

    getAll(url)
      .then((songs) => setSongs(songs))
      .catch((error) => setError(error));
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

    filterChords();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    setSearch(currentValue);
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
    </div>
  );
};

export default SongSearch;
