import { FormEvent, useState, useRef, useEffect } from "react";

import { ALERT_MESSAGES } from "../helpers/alertMessages";
import { createData } from "../helpers/Api";

import Alert from "./Alert/Alert";

import { useLocation } from "react-router-dom";

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

const SongForm: React.FC = () => {
  const [form, setForm] = useState(initialValues);
  const [formIsSubmited, setFormIsSubmited] = useState(false);

  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  //Aqui se enviaran los datos al db
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.name === "" || form.tones.length <= 0 || form.chords.length <= 0) {
      inputRef.current!.focus();
      setAlertIsOpen(false);
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
      setFormIsSubmited(false);
      setAlertMessage(ALERT_MESSAGES.emptyForm);
      setError(true);
    } else {
      setAlertIsOpen(false);
      createData(form);
      setError(false);
      setFormIsSubmited(true);
      setAlertMessage(ALERT_MESSAGES.submitedForm);
    }

    e.currentTarget.reset();
  };

  useEffect(() => {
    //Clear the form after submitting
    if (formIsSubmited) setForm(initialValues);

    //Detect the route to focus input
    if (location.pathname === "/create") inputRef.current?.focus();
  }, [formIsSubmited, location]);

  //Aqui se obtienen los datos del form
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "name") {
      e.currentTarget.maxLength = 50;

      if (e.currentTarget.value.length >= 50) {
        setError(true);
        setAlertMessage(ALERT_MESSAGES.maxLength);
        return;
      } else {
        setError(false);
      }
    }

    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="form-wrapper">
      <section>
        <p style={{ opacity: 1 }}>Ingresa en nombre del tema o cancion.</p>
        <p style={{ opacity: 0.5 }}>
          Separa cada tonalidad por comas (<span>,</span>) para agregar.
        </p>
        <p style={{ opacity: 0.5 }}>
          Separa cada acorder por comas (<span>,</span>) para agregar.
        </p>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Nombre del tema o cancion"
          onChange={handleChange}
          ref={inputRef}
          maxLength={50}
          autoComplete="off"
        />

        <TonesInput
          name="tones"
          placeholder="C, E, Bb"
          form={form}
          setForm={setForm}
          formIsSubmited={formIsSubmited}
        />
        <ChordsInput
          name="chords"
          placeholder="C, A7, Gm6"
          form={form}
          setForm={setForm}
          formIsSubmited={formIsSubmited}
        />
        <input type="submit" value="Crear" />
      </form>
      {formIsSubmited && (
        <Alert
          width="300px"
          height="100px"
          message={alertMessage}
          color="var(--generalColor)"
          colorBg="var(--success)"
          position="bottom-center"
          setAlertIsOpen={setAlertIsOpen}
          alertIsOpen={alertIsOpen}
        />
      )}

      {error ? (
        <Alert
          width="300px"
          height="100px"
          message={alertMessage}
          color="var(--generalColor)"
          colorBg="var(--error)"
          position="bottom-center"
          setAlertIsOpen={setAlertIsOpen}
          alertIsOpen={alertIsOpen}
        />
      ) : null}
    </div>
  );
};

export default SongForm;
