import { SongsType } from "../components/SongSearch/SongSearch";
import { chordsInputRegx, tonesInputRegx } from "./regularExp";
import { listOfTonesAndChords } from "./tonesChordsList";
import { toneList } from "./tonesList";

//Obtener el acorde segun el tono
export const getChordsByTone = (tone: string): string[] => {
  let newTone = tone.split("");

  if (chordsInputRegx.test(newTone.join("").slice(0, 1))) return [];
  if (/[0-9]|\/|M|m|,|d|i|a|g/g.test(newTone.join("").slice(0, 1))) return [];

  if (/s|u|#|b/g.test(newTone[0])) return [(newTone[0] = "")];
  let filterChord =
    newTone[1] === "b" || newTone[1] === "#"
      ? newTone.join("").length === 2
        ? [newTone.join("")]
        : [newTone.join("").slice(0, 2)]
      : newTone;

  if (/Cb|E#|Fb/g.test(filterChord[0])) return [];

  const result = listOfTonesAndChords[filterChord[0]].chords.filter((chord) =>
    chord.includes(tone)
  );

  return result;
};
//Obtener el tono
export const getTone = (tone: string): string[] => {
  let newTone = tone.split("");
  if (tonesInputRegx.test(newTone.join("").slice(0, 1))) return [];
  const tonesMatch = toneList.filter((toneList) => toneList.includes(tone));
  return tonesMatch;
};
//Obtener solo el nombre de las canciones
export const getSongName = (songs: SongsType, songName: string) => {
  if (songName === "") return;

  let matchName = songs.some((song) => {
    return song.name === songName;
  });
  return matchName && matchName;
};
