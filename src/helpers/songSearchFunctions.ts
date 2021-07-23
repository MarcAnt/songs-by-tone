import { SongsType } from "../components/SongSearch";
//Filter all data by chords
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

//Filter all data by tones
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

//Create matches for non uniques items
export const createMatches = (
  setMatches: (value: React.SetStateAction<SongsType>) => void,
  ...filterMatches: SongsType[]
) => {
  const allMatches: SongsType = filterMatches.flatMap((filterMatch) => {
    return filterMatch.map((filter) => {
      return filter;
    });
  });

  const uniq = (a: SongsType) => {
    return Array.from(new Set(a));
  };

  return setMatches(uniq(allMatches));
};

//Create uniques for single SongsType
export const createUniqResults = (results: SongsType) => {
  return Array.from(new Set(results));
};
//Create uniques for single string[]
export const createUniqs = (results: string[]) => {
  return Array.from(new Set(results));
};

//Filter unique tones
export const filterUniqTones = (results: SongsType, search: string) => {
  let filterResults: string[] = [];
  results
    .map((result) => {
      return result.tones.filter((tone) => {
        return tone.includes(search);
      });
    })
    .flatMap((e) => e.map((e) => filterResults.push(e)));
  return Array.from(new Set(filterResults));
};

//Filter unique chords
export const filterUniqChords = (results: SongsType, search: string) => {
  let filterResults: string[] = [];
  results
    .map((result) => {
      return result.chords.filter((chord) => {
        return chord.includes(search);
      });
    })
    .flatMap((e) => e.map((e) => filterResults.push(e)));
  return Array.from(new Set(filterResults));
};

// Filter by type on search bar
type filterList = {
  [prop: string]: string[];
};
export const filterResultBar = (
  chordMatched: SongsType,
  tonesMatched: SongsType,
  search: string
): filterList => {
  return {
    chords: filterUniqChords(chordMatched, search),
    tones: filterUniqTones(tonesMatched, search),
    all: createUniqs([
      ...filterUniqTones(tonesMatched, search),
      ...filterUniqChords(chordMatched, search),
    ]),
  };
};
