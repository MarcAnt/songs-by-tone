import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  MouseEvent,
  useContext,
} from "react";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { InitialValues } from "@components/SongForm/SongForm";
//components
import Alert from "./Alert/Alert";
import SearchMatches from "@components/SearchMatches/SearchMatches";
//helpers
import { ALERT_MESSAGES } from "@helpers/alertMessages";
import { chordsInputRegx, separadoresRegx } from "@helpers/regularExp";
import { getChordsByTone } from "@helpers/songFormFunctions";
import SelectedInputContext from "@context/inputSelectedContext";

type Props = {
  form: InitialValues;
  setForm: React.Dispatch<React.SetStateAction<InitialValues>>;
  placeholder: string;
  name: string;
  formIsSubmited: boolean;
  setFormIsSubmited: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChordsInput: React.FC<Props> = ({
  setForm,
  form,
  formIsSubmited,
  placeholder,
  setFormIsSubmited,
  name,
}) => {
  const [chords, setChords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { selectedInput, handleSelectedInput } =
    useContext(SelectedInputContext);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.currentTarget.value;
    if (currentValue === " ") return;
    if (chordsInputRegx.test(currentValue)) {
      inputRef.current!.value = "";
      return;
    }

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

          if (/\s|,/g.test(currentValue.slice(0, 1))) return;

          setChords([...chords, currentValue.slice(0, -1).trim()]);
          setForm({
            ...form,
            chords: [...chords, currentValue.slice(0, -1).trim()],
          });
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

  const handleSeachBar = (inputValue: string) => {
    setInputValue(inputValue);
  };

  useEffect(() => {
    if (chordsInputRegx.test(inputValue)) {
      setInputValue((prev) => prev.slice(0, -1));
    }
  }, [inputValue]);

  useEffect(() => {
    if (formIsSubmited) {
      setChords([]);
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
          <FormLabel style={{ padding: 0 }}>Acordes:</FormLabel>
          <span>
            {formIsSubmited
              ? null
              : chords.map((chord, idx) => (
                  <button type="button" key={idx} onClick={deleteChords}>
                    {chord}
                    <span style={{ paddingLeft: "0.1rem", fontSize: ".65rem" }}>
                      X
                    </span>
                  </button>
                ))}
          </span>
          <Input
            type="text"
            name={name}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleInput}
            autoComplete="off"
            ref={inputRef}
            disabled={chords.length >= 5 ? true : false}
          />
        </FormControl>
        <SearchMatches
          searchMatchesResults={getChordsByTone(inputValue)}
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
