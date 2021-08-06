import { SongsType } from "../components/SongSearch/SongSearch";
import { chordsInputRegx, tonesInputRegx } from "./regularExp";
import { listOfTonesAndChords } from "./tonesChordsList";
import { toneList } from "./tonesList";

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

export const getTone = (tone: string): string[] => {
  let newTone = tone.split("");
  if (tonesInputRegx.test(newTone.join("").slice(0, 1))) return [];

  // const keysTones = Object.keys(listOfTonesAndChords);

  // return keysTones.filter((keysTone) => keysTone.includes(tone));

  const tonesMatch = toneList.filter((toneList) => toneList.includes(tone));

  return tonesMatch;
};

export const getSongName = (songs: SongsType, songName: string) => {
  if (songName === "") return;

  let matchName = songs.some((song) => {
    return song.name === songName;
  });
  return matchName && matchName;
};
