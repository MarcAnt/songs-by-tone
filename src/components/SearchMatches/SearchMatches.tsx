import React, { useEffect, useRef } from "react";
import { resultsDropdown } from "@helpers/handleResultDropdown";
import useHandleSearchResults from "@hooks/useHandleSearchResults";
import { SearchMatchesWrapper } from "./SearchMatches.styles";

type Props = {
  searchMatchesResults: string[];
  inputRef: React.RefObject<HTMLInputElement>;
  inputValue: string;
  handleSearchBar: (value: string) => void;
  position?: string;
  maxHeight?: string;
  top?: string;
};

const SearchMatches: React.FC<Props> = ({
  searchMatchesResults,
  inputRef,
  inputValue,
  handleSearchBar,
  position,
  maxHeight,
  top,
}) => {
  const [isOpen, setIsOpen] = useHandleSearchResults(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target !== inputRef.current) {
        if (!inputValue) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      } else {
        setIsOpen(true);
      }
    };

    //Handling close the search matches bar
    document.addEventListener("click", handle);

    //handle scroll for the dropdown for search results
    resultsDropdown(inputValue, divRef);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, [divRef, inputValue, inputRef, setIsOpen]);

  return (
    <>
      {isOpen
        ? inputValue && (
            <SearchMatchesWrapper
              ref={divRef}
              maxHeight={maxHeight}
              top={top}
              position={position}
            >
              <ul>
                {searchMatchesResults.map((inputResult, idx) => (
                  <li key={idx} onClick={() => handleSearchBar(inputResult)}>
                    {inputResult}
                  </li>
                ))}
              </ul>
            </SearchMatchesWrapper>
          )
        : null}
    </>
  );
};

export default SearchMatches;
