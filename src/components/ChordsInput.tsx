import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  MouseEvent,
} from "react";
import { InitialValues } from "./SongForm";

import Alert from "./Alert/Alert";
import { ALERT_MESSAGES } from "../helpers/alertMessages";

type Props = {
  form: InitialValues;
  setForm: React.Dispatch<React.SetStateAction<InitialValues>>;
  placeholder: string;
  name: string;
  formIsSubmited: boolean;
};

const ChordsInput: React.FC<Props> = ({
  setForm,
  form,
  placeholder,
  name,
  formIsSubmited,
}) => {
  const [chords, setChords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|(\^+)|(\[+)|(\]+)|(\\+)|(\|+)|(\(+)|(\)+)|([acdefghijklnopqrtuvwxyz])|([H-L])|([N-Z])|0|\s/g;
    let separadoresRegx = /,|-|\./g;

    if (charsRegx.test(currentValue)) return;

    if (separadoresRegx.test(currentValue)) {
      if (chords.length < 5) {
        setInputValue("");

        let repeatChords = chords.includes(currentValue.slice(0, -1).trim());

        if (repeatChords) {
          setError(true);
          setAlertMessage(ALERT_MESSAGES.similarChord);
          setAlertIsOpen(false);
        } else {
          setError(false);
          setChords([...chords, currentValue.slice(0, -1).trim()]);
          setForm({
            ...form,
            chords: [...chords, currentValue.slice(0, -1).trim()],
          });
        }

        if (formIsSubmited) {
          setChords([]);
        }
      } else {
        setError(true);
        setAlertMessage(ALERT_MESSAGES.maxChords);
      }
    } else {
      setInputValue(currentValue);
    }
  };

  const deleteChords = (e: MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.firstChild;
    let newChords = chords.filter(
      (chord) => chord !== currentValue?.textContent
    );
    setChords(newChords);
    setForm({
      ...form,
      chords: [...newChords],
    });
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [chords]);

  return (
    <>
      <span>
        Acordes:
        {chords &&
          !formIsSubmited &&
          chords.map((chord, idx) => (
            <button type="button" key={idx} onClick={deleteChords}>
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
        autoComplete="off"
        ref={inputRef}
        disabled={chords.length >= 5 ? true : false}
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

export default ChordsInput;
