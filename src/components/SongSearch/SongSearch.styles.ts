import styled from "styled-components";

export const SearchWrapper = styled.div`
  /* height: 80vh; */
  section {
    padding-top: 2rem;
  }
  section p {
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
    padding: 1rem 2rem;
    margin: 0 auto;
    width: 60%;
    text-shadow: 3px 3px 2px #b299cc;
  }

  .search-matches-input {
    border-radius: 4px;
    background-color: whitesmoke;
    max-height: 200px;
    width: 100%;
    overflow-y: scroll;
    opacity: 0.8;
    position: absolute;
    /* z-index: 2; */
    top: 5.4rem;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
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
  }

  .search-bar {
    border-radius: 4px;
    box-shadow: 1px 1px 0 2.5px var(--btnBgColor);

    .search-bar-content {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      transition: box-shadow 0.15s ease-in-out, boder-color 0.15s ease-in-out;
    }

    .search-bar-content:focus-within {
      box-shadow: 0 0 0.8rem 0.25rem #66339950;
    }

    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    background-color: white;

    button[type="submit"] {
      width: 20%;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: var(--btnBorder);
      box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
    }

    div[class^=" css"] {
      flex: 30%;
      box-shadow: none;
    }

    input[type="text"] {
      flex: 50%;
      margin: 0;
    }

    div,
    input[type="text"] {
      border: none;
    }
  }

  @media (max-width: 768px) {
    section p {
      padding: 0;
      font-size: 1.5rem;
    }
    section p,
    form {
      width: 80%;
    }
  }
`;
