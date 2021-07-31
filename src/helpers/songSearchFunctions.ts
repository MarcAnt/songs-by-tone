import { SongsType } from "../components/SongSearch/SongSearch";

/**
 * Obtener todos los acordes filtrados
 */

//Filter all data by chords
export const filterChords = (songs: SongsType, search: string) => {
  let matches: number[] = [];

  //Retrieve all of the songs list
  let songsList = songs.map((song) => {
    return song;
  });
  //create matches = [ 1, 2, 6]
  songs
    .map((song) => {
      return song.chords.filter((chords) => {
        return chords.includes(search);
      });
    })
    .filter((e, idx) => {
      return e.length > 0 && matches.push(idx);
    });
  //Ex: songList[2] --> {id:2...}
  return matches.map((match) => songsList[match]);
};

/**
 * Obtener todos los tonos filtrados
 */

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

/**
 * Obtener un array con los valores unicos obtenidos de varios arrays del tipo SongsType
 */

//Create matches for non uniques items
export const createMatches = (
  setMatches: (value: React.SetStateAction<SongsType>) => void,
  ...filterMatches: SongsType[]
) => {
  //Unite all the arrays
  const allMatches: SongsType = filterMatches.flatMap((filterMatch) => {
    return filterMatch.map((filter) => {
      return filter;
    });
  });
  //Create unique arrays
  const uniq = (a: SongsType) => {
    return Array.from(new Set(a));
  };

  return setMatches(uniq(allMatches));
};

/**
 * Obtener un array con los valores unicos obtenidos de un solo array del tipo SongsType
 */

//Create uniques for single SongsType
export const createUniqResults = (results: SongsType) => {
  return Array.from(new Set(results));
};

/**
 * Obtener un array con los valores unicos obtenidos de un solo array del tipo string[]
 */

//Create uniques for single string[]
export const createUniqs = (results: string[]) => {
  return Array.from(new Set(results));
};

/**
 * Obtener un array con los valores unicos de los tonos
 */

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

/**
 * Obtener un array con los valores unicos de los acordes
 */

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

/**
 * Filtrar los resultados de la busqueda segun el tipo seleccionado
 */

// Filter by type on search bar of matches
type filterListMatches = {
  [prop: string]: string[];
};
export const filterResultBar = (
  chordMatched: SongsType,
  tonesMatched: SongsType,
  search: string
): filterListMatches => {
  return {
    chords: filterUniqChords(chordMatched, search),
    tones: filterUniqTones(tonesMatched, search),
    all: createUniqs([
      ...filterUniqTones(tonesMatched, search),
      ...filterUniqChords(chordMatched, search),
    ]),
  };
};

/**
 * Filtrar los resultados de la busqueda al buscar una cancion
 */

//Filter for submit
type filterList = {
  [prop: string]: () => void;
};

export const filterOnSubmit = (
  setMatches: React.Dispatch<React.SetStateAction<SongsType>>,
  chordMatched: SongsType,
  tonesMatched: SongsType
): filterList => {
  return {
    chords: () => createMatches(setMatches, chordMatched),
    tones: () => createMatches(setMatches, tonesMatched),
    all: () => createMatches(setMatches, tonesMatched, chordMatched),
  };
};
