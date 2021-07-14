import React, { FormEvent, useState } from "react";
import ChordsInput from "./ChordsInput";
import TonesInput from "./TonesInput";

export type InitialValues = {
  name: string;
  tones: string[];
  chords: string[];
};

export const initialValues: InitialValues = {
  name: "",
  tones: [],
  chords: [],
};

const SongForm: React.FC = () => {
  const [form, setForm] = useState(initialValues);
  const [formIsSubmited, setFormIsSubmited] = useState(false);
  //Aqui se enviaran los datos al db
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.tones || !form.chords) {
      alert("Inserta los datos");
      setFormIsSubmited(false);
    } else {
      setFormIsSubmited(true);
      setForm(initialValues);
    }
    console.log(form);
  };
  //Aqui se obtienen los datos del form
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Nombre del tema o cancion"
          onChange={handleChange}
          required
          title="Ingresa el nombre de cancion"
        />

        <TonesInput
          name="tones"
          placeholder="Separa por comas los tonos: C, E, Bb"
          form={form}
          setForm={setForm}
          formIsSubmited={formIsSubmited}
        />
        <ChordsInput
          name="chords"
          placeholder="Separa por comas los acordes: C, A7, Gm6"
          form={form}
          setForm={setForm}
          formIsSubmited={formIsSubmited}
        />
        <input type="submit" value="Crear" />
      </form>
    </div>
  );
};

export default SongForm;
