import React, { useState, ChangeEvent, MouseEvent } from "react";
import { InitialValues } from "./SongForm";

type Props = {
  form: InitialValues;
  setForm: React.Dispatch<React.SetStateAction<InitialValues>>;
  placeholder: string;
  name: string;
  formIsSubmited: boolean;
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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    let charsRegx =
      /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|([acdefghijklnopqrstuvwxyz])|([H-L])|([N-Z])|0/g;
    let separadoresRegx = /,|-|\./g;

    if (charsRegx.test(currentValue)) return;

    if (separadoresRegx.test(currentValue)) {
      if (tones.length < 3) {
        setInputValue("");
        setTones([...tones, currentValue.slice(0, -1).trim()]);

        setForm({
          ...form,
          tones: [...tones, currentValue.slice(0, -1).trim()],
        });

        if (formIsSubmited) {
          console.log(formIsSubmited);
          setTones([]);
        }
      } else {
        alert("No puedes subir mas de 3 tonos por cancion");
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
  };

  return (
    <>
      <span>
        {tones &&
          !formIsSubmited &&
          tones.map((chord) => (
            <button type="button" key={chord} onClick={deleteTones}>
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

export default TonesInput;
