import React, { useState, ChangeEvent, MouseEvent } from "react";
import Alert from "./Alert/Alert";
import { InitialValues } from "./SongForm";

type Props = {
  form: InitialValues;
  setForm: React.Dispatch<React.SetStateAction<InitialValues>>;
  placeholder: string;
  name: string;
  formIsSubmited: boolean;
};

const ALERT_MESSAGES = {
  similarTone: "Agregar un tonalidad distinta",
  maxTones: "Solo 3 tonalidades por cancion",
};

const TonesInput: React.FC<Props> = ({
  setForm,
  form,
  placeholder,
  name,
  formIsSubmited,
}) => {
  const [tones, setTones] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState(false);

  //Recordar crear un contexto para el maneja de las alertas
  const [alertMessage, setAlertMessage] = useState("");
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|([acdefghijklnopqrstuvwxyz])|([H-L])|([N-Z])|0/g;
    let separadoresRegx = /,|-|\./g;

    if (charsRegx.test(currentValue)) return;

    if (separadoresRegx.test(currentValue)) {
      if (tones.length < 3) {
        setInputValue("");

        let repeatTones = tones.includes(currentValue.slice(0, -1).trim());

        if (repeatTones) {
          setError(true);
          setAlertMessage(ALERT_MESSAGES.similarTone);
          setAlertIsOpen(false);
        } else {
          setError(false);
          setTones([...tones, currentValue.slice(0, -1).trim()]);
          setForm({
            ...form,
            tones: [...tones, currentValue.slice(0, -1).trim()],
          });
        }

        if (formIsSubmited) {
          setTones([]);
          setError(false);
        }
      } else {
        setAlertMessage(ALERT_MESSAGES.maxTones);
        setError(true);
      }
    } else {
      setInputValue(currentValue);
    }
  };

  const deleteTones = (e: MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.firstChild;
    let newTones = tones.filter((chord) => chord !== currentValue?.textContent);
    setTones(newTones);
    setForm({
      ...form,
      tones: [...newTones],
    });
    setError(false);
  };

  return (
    <>
      <span>
        {tones &&
          !formIsSubmited &&
          tones.map((chord, idx) => (
            <button type="button" key={idx} onClick={deleteTones}>
              {chord} <span>X</span>
            </button>
          ))}
      </span>
      <input
        type="text"
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInput}
      />

      {error ? (
        <Alert
          width="300px"
          height="100px"
          position="bottom-center"
          color="var(--generalColor)"
          colorBg="var(--error)"
          message={alertMessage}
          setAlertIsOpen={setAlertIsOpen}
          alertIsOpen={alertIsOpen}
        />
      ) : null}
    </>
  );
};

export default TonesInput;
