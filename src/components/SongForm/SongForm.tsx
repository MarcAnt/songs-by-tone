import { FormEvent, useState, useRef, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FormWrapper } from "./SongForm.styles";

import { ALERT_MESSAGES } from "../../helpers/alertMessages";
import { createData, getData } from "../../helpers/Api";
import { getSongName } from "../../helpers/songFormFunctions";

import Alert from "../Alert/Alert";

import ChordsInput from "../ChordsInput";
import TonesInput from "../TonesInput";
//Types
import { SongsType } from "../SongSearch/SongSearch";
//Context
import SelectedInputContext from "../../Context/inputSelectedContext";
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

  const [songs, setSongs] = useState<SongsType>([]);

  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [error, setError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const { selectedInput, handleSelectedInput } =
    useContext(SelectedInputContext);

  //Aqui se enviaran los datos al db
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.name === "" || form.tones.length <= 0 || form.chords.length <= 0) {
      inputRef.current!.focus();
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
      setFormIsSubmited(false);
      setAlertIsOpen(false);
      setAlertMessage(ALERT_MESSAGES.emptyForm);
      setOpenSuccess(false);
      setError(true);
    } else {
      if (form.name.length <= 3) {
        inputRef.current!.focus();

        setAlertMessage(ALERT_MESSAGES.minLength);
        setAlertIsOpen(false);
        setError(true);
      } else {
        setForm({
          ...form,
          [e.currentTarget.name]: e.currentTarget.value,
        });

        let songName = getSongName(songs, form.name);
        console.log(songName);
        if (songName) {
          setAlertMessage(ALERT_MESSAGES.similarName);
          setAlertIsOpen(false);
          setError(true);
        } else {
          // createData(form);
          setForm(initialValues);
          setFormIsSubmited(true);
          setError(false);
          setAlertIsOpen(false);
          setAlertMessage(ALERT_MESSAGES.submitedForm);
          setOpenSuccess(true);
        }
      }
    }

    e.currentTarget.reset();
  };

  useEffect(() => {
    if (form.name === "") return;
    const abortController = new AbortController();
    const signal = abortController.signal;
    try {
      getData(signal).then((songs) => setSongs(songs));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    return () => {
      abortController.abort();
    };
  }, [form]);

  useEffect(() => {
    //Clear the form after submitting
    if (formIsSubmited) setForm(initialValues);

    //Detect the route to focus input
    if (location.pathname === "/create") inputRef.current?.focus();

    return () => {
      setForm(initialValues);
    };
  }, [location, formIsSubmited]);

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

  useEffect(() => {
    inputRef.current!.addEventListener("click", (e) => {
      handleSelectedInput(inputRef.current!.name);
    });
  }, [handleSelectedInput, selectedInput]);

  return (
    <FormWrapper>
      <section>
        <p style={selectedInput === "name" ? { opacity: 1 } : { opacity: 0.5 }}>
          Ingresa el nombre de la canción.
        </p>
        <p
          style={
            selectedInput === "chords" || selectedInput === "tones"
              ? { opacity: 1 }
              : { opacity: 0.5 }
          }
        >
          Separa por coma (,) cada tono o acorde para agregar.
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
        <div className="inputsContainer">
          <TonesInput
            name="tones"
            placeholder="C, E, Bb"
            form={form}
            setForm={setForm}
            formIsSubmited={formIsSubmited}
            setFormIsSubmited={setFormIsSubmited}
          />
          <ChordsInput
            name="chords"
            placeholder="C, A7, Gm6"
            form={form}
            setForm={setForm}
            formIsSubmited={formIsSubmited}
            setFormIsSubmited={setFormIsSubmited}
          />
        </div>
        <input type="submit" value="Crear" />
      </form>
      {openSuccess && (
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
    </FormWrapper>
  );
};

export default SongForm;
