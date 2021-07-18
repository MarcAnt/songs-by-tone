import { FormEvent, useState } from "react";
import { createData } from "../helpers/Api";
import Alert from "./Alert/Alert";

import ChordsInput from "./ChordsInput";
import TonesInput from "./TonesInput";

export type InitialValues = {
  name: string;
  chords: string[];
  tones: string[];
};

export const initialValues: InitialValues = {
  name: "",
  chords: [],
  tones: [],
};

const SongForm = () => {
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
      createData(form);
    }
  };

  //Aqui se obtienen los datos del form
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="form-wrapper">
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
      {/* {formIsSubmited && (
        // <Alert
        //   width="300px"
        //   height="100px"
        //   message="Creado con Exito"
        //   color="var(--generalColor)"
        //   colorBg="var(--btnBgColor)"
        //   position="bottom-center"

        // />
      )} */}
    </div>
  );
};

export default SongForm;
