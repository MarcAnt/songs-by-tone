import React, { useState, ChangeEvent, MouseEvent } from "react";
import { InitialValues } from "./SongForm";

type Props = {
  form: InitialValues;
  setForm: React.Dispatch<React.SetStateAction<InitialValues>>;
  placeholder: string;
  name: string;
  //   handleChange: (e: FormEvent<HTMLInputElement>) => void;
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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|([acdefghijklnopqrtvwxyz])|([H-L])|([N-Z])|0/g;
    let separadoresRegx = /,|-|\./g;

    if (charsRegx.test(currentValue)) return;

    if (separadoresRegx.test(currentValue)) {
      if (chords.length < 5) {
        setInputValue("");
        setChords([...chords, currentValue.slice(0, -1).trim()]);
        setForm({
          ...form,
          chords: [...chords, currentValue.slice(0, -1).trim()],
        });
        if (formIsSubmited) {
          console.log(formIsSubmited);
          setChords([]);
        }
      } else {
        alert("No puedes subir mas de 5 acordes por cancion");
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

  return (
    <>
      <span>
        {chords &&
          !formIsSubmited &&
          chords.map((chord) => (
            <button type="button" key={chord} onClick={deleteChords}>
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
    </>
  );
};

export default ChordsInput;
