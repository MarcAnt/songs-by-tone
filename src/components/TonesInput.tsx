import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  MouseEvent,
  useContext,
} from "react";
import { ALERT_MESSAGES } from "../helpers/alertMessages";
import { tonesInputRegx, separadoresRegx } from "../helpers/regularExp";
import { getTone } from "../helpers/songFormFunctions";
import Alert from "./Alert/Alert";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

import { InitialValues } from "@components/SongForm/SongForm";

import SelectedInputContext from "../context/inputSelectedContext";
import SearchMatches from "./SearchMatches/SearchMatches";

type Props = {
  form: InitialValues;
  setForm: React.Dispatch<React.SetStateAction<InitialValues>>;
  placeholder: string;
  name: string;
  formIsSubmited: boolean;
  setFormIsSubmited: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TonesInput: React.FC<Props> = ({
  setForm,
  form,
  formIsSubmited,
  setFormIsSubmited,
  placeholder,
  name,
}) => {
  const [tones, setTones] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  //Recordar crear un contexto para el maneja de las alertas
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { selectedInput, handleSelectedInput } =
    useContext(SelectedInputContext);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    if (tonesInputRegx.test(currentValue)) {
      inputRef.current!.value = "";
      return;
    }

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

  const handleSeachBar = (inputValue: string) => {
    setInputValue(inputValue);
  };

  useEffect(() => {
    inputRef.current?.focus();
    if (tonesInputRegx.test(inputValue)) {
      setInputValue((prev) => prev.slice(0, -1));
    }
  }, [inputValue]);

  useEffect(() => {
    if (formIsSubmited) {
      setTones([]);
      setFormIsSubmited(false);
    }
  }, [formIsSubmited, setFormIsSubmited]);

  useEffect(() => {
    inputRef.current!.addEventListener("click", (e) => {
      handleSelectedInput(inputRef.current!.name);
    });
  }, [handleSelectedInput, selectedInput]);

  return (
    <>
      <div className="formControl">
        <FormControl>
          <FormLabel>Tonalidades:</FormLabel>
          <span>
            {tones
              ? formIsSubmited
                ? null
                : tones.map((chord, idx) => (
                    <button type="button" key={idx} onClick={deleteTones}>
                      {chord}
                      <span
                        style={{ paddingLeft: "0.1rem", fontSize: ".65rem" }}
                      >
                        X
                      </span>
                    </button>
                  ))
              : null}
          </span>
          <Input
            type="text"
            name={name}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleInput}
            autoComplete="off"
            ref={inputRef}
            disabled={tones.length >= 3 ? true : false}
          />
        </FormControl>

        <SearchMatches
          searchMatchesResults={getTone(inputValue)}
          inputRef={inputRef}
          handleSearchBar={handleSeachBar}
          inputValue={inputValue}
        />
      </div>

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
