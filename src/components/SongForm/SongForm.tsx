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
  const [error, setError] = useState(false);

  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const { selectedInput, handleSelectedInput } =
    useContext(SelectedInputContext);

  useEffect(() => {
    if (form.name === "") return;
    const abortController = new AbortController();
    const signal = abortController.signal;

    getData(signal)
      .then((songs) => {
        setSongs(songs);
        console.log("obtenidos");
      })
      .catch(() => setSongs([]));

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

  //Aqui se enviaran los datos al db
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.name === "" || form.tones.length <= 0 || form.chords.length <= 0) {
      inputRef.current!.focus();
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
      setError(true);
      setAlertIsOpen(false);
      setAlertMessage(ALERT_MESSAGES.emptyForm);
      setFormIsSubmited(false);
      console.log("vacios");
      return;
    } else {
      if (form.name.length <= 3) {
        inputRef.current!.focus();
        setFormIsSubmited(false);
        setError(true);
        setAlertIsOpen(false);
        setAlertMessage(ALERT_MESSAGES.minLength);
        console.log("Error en menos de 3 caracteres");
      } else {
        setForm({
          ...form,
          [e.currentTarget.name]: e.currentTarget.value,
        });

        let songName = songs ? getSongName(songs, form.name) : undefined;

        if (songName) {
          setError(true);
          setAlertIsOpen(false);
          setFormIsSubmited(false);
          setAlertMessage(ALERT_MESSAGES.similarName);
          console.log("error en el nombre repetido");
        } else {
          createData(form)
            .then(() => {
              console.log("creado");
              setError(false);
              setFormIsSubmited(true);
              setAlertIsOpen(false);
              setOpenSuccess(true);
              setAlertMessage(ALERT_MESSAGES.submitedForm);
            })
            .catch(() => {
              console.log(" no creado");
              setError(true);
              setFormIsSubmited(false);
              setAlertIsOpen(false);
              setAlertMessage(ALERT_MESSAGES.noConnection);
            });

          console.log(error, formIsSubmited, form);
        }
      }
    }

    e.currentTarget.reset();
  };

  //Aqui se obtienen los datos del form
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "name") {
      e.currentTarget.maxLength = 50;

      if (e.currentTarget.value.length >= 50) {
        setError(true);
        setFormIsSubmited(false);
        setAlertIsOpen(false);
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
          Ingresa el nombre de la canci??n.
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
