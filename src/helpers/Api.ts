import { InitialValues } from "../components/SongForm/SongForm";
const URL = "http://localhost:5000/songs";

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

export const getData = async (signal?: AbortSignal) => {
  const res = await fetch(URL, { signal: signal });
  const data = await res.json();
  return data;
};
