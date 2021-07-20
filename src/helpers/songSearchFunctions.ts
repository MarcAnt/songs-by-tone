import { SongsType } from "../components/SongSearch";

export const filterChords = (songs: SongsType, search: string) => {
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

export const filterTones = (songs: SongsType, search: string) => {
  let matches: number[] = [];
  let songsList = songs.map((song) => {
    return song;
  });

  songs
    .map((song) => {
      return song.tones.filter((tones) => {
        return tones.includes(search);
      });
    })
    .filter((e, idx) => {
      return e.length > 0 && matches.push(idx);
    });

  return matches.map((match) => songsList[match]);
};
