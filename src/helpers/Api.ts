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

export const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
