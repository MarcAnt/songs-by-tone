import { useState } from "react";

const useSelectedInput = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [selectedInput, setSelectedInput] = useState<string>("");

  return [selectedInput, setSelectedInput];
};

export default useSelectedInput;
