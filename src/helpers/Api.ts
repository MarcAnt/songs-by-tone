import { InitialValues } from "../components/SongForm/SongForm";
const URL = "http://localhost:5000/songs";
const LIMIT = 15;

export const createData = async (formdata: InitialValues) => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formdata),
  });

  const data = await res.json();
  return data;
};

export const getTonesAndChords = async (
  term: string,
  page?: number,
  signal?: AbortSignal
) => {
  let query: string = "";
  if (!page) query = `tones_like=${term}&chords_like=${term}`;
  if (page)
    query = `tones_like=${term}&chords_like=${term}&_page=${page}&_limit=${LIMIT}`;

  const res = await fetch(`${URL}?${query}`, {
    signal: signal,
  });
  const data = await res.json();
  return data;
};

export const getFilterBy = async (
  filter: string,
  term: string,
  page: number,
  signal?: AbortSignal
) => {
  let query: string = "";
  if (filter === "tones") {
    query = `tones_like=${term}&_page=${page}&_limit=${LIMIT}`;
  } else if (filter === "chords") {
    query = `chords_like=${term}&_page=${page}&_limit=${LIMIT}`;
  } else {
    query = `tones_like=${term}&chords_like=${term}&_page=${page}&_limit=${LIMIT}`;
  }

  const res = await fetch(`${URL}?${query}`, {
    signal: signal,
  });
  const data = await res.json();
  return data;
};

export const getTones = async (
  term: string,
  page: number,
  signal?: AbortSignal
) => {
  const res = await fetch(
    `${URL}?tones_like=${term}&_page=${page}&_limit=${LIMIT}`,
    {
      signal: signal,
    }
  );
  const data = await res.json();
  return data;
};

export const getChords = async (
  term: string,
  page: number,
  signal?: AbortSignal
) => {
  const res = await fetch(
    `${URL}?chords_like=${term}&_page=${page}&_limit=${LIMIT}`,
    {
      signal: signal,
    }
  );
  const data = await res.json();
  return data;
};

export const getData = async (signal?: AbortSignal) => {
  const res = await fetch(URL, { signal: signal });
  const data = await res.json();
  return data;
};
