import { useState } from "react";

const useHandleSearchResults = (
  value: false
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isOpen, setIsOpen] = useState<boolean>(value);

  return [isOpen, setIsOpen];
};

export default useHandleSearchResults;
