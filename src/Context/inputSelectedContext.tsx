import { useState, createContext } from "react";

const SelectedInputContext = createContext({
  selectedInput: "",
  handleSelectedInput: (value: string) => {},
});

const SelectedInputProvider = ({ children }: { children: JSX.Element }) => {
  const [selectedInput, setSelectedInput] = useState<string>("name");

  const handleSelectedInput = (value: string) => {
    setSelectedInput(value);
  };

  const data = { selectedInput, handleSelectedInput };

  return (
    <SelectedInputContext.Provider value={data}>
      {children}
    </SelectedInputContext.Provider>
  );
};

export { SelectedInputProvider };

export default SelectedInputContext;
