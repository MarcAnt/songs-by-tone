import styled from "styled-components";

type Styles = {
  maxHeight?: string;
  position?: string;
  top?: string;
};

export const SearchMatchesWrapper = styled.div<Styles>`
  border-radius: 4px;
  background-color: whitesmoke;
  width: 100%;
  overflow-y: scroll;
  opacity: 0.8;
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "100px")};
  position: ${(props) => (props.position ? props.position : "relative")};
  top: ${(props) => props.position && props.top};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--btnBgColor);
    border-radius: 4px;
  }

  li {
    list-style: none;
    padding: 1rem;
    cursor: pointer;
    font-weight: bolder;
  }

  li:hover {
    background-color: var(--btnBorder);
  }
`;
