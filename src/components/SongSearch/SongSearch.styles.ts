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

  .card-grid {
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1.5rem auto 0 auto;
    max-width: 1000px;
    min-width: 300px;
    /* min-height: 43vh; */
    /* height: 44vh; */
    align-content: flex-start;
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
      /* border: 2px solid var(--btnBgColor); */
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

  .card-item {
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    border: 4px solid var(--generalColor);
    /* box-shadow: 1px 1px 2.5px grey; */
    box-shadow: 1px 1px 0 2.5px var(--btnBorder);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--btnBgColor);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    div {
      flex: 70%;
      text-align: left;
    }

    h4 {
      font-size: 0.8rem;
    }

    p {
      text-shadow: 1px 1px 2px #ddd;
      font-weight: bolder;
      font-size: 2.5rem;
      /* margin: 1rem auto; */
      flex: 30%;
      text-align: left;
    }

    span {
      font-size: 1rem;
    }

    .one-more-tone {
      font-size: 1.3rem;
    }
  }

  .card-item:hover {
    transform: translateY(0.25rem);
  }

  @media (max-width: 1024px) {
    .card-grid {
      margin: 1.5rem 2rem;
    }
  }

  @media (max-width: 768px) {
    section p,
    form {
      width: 80%;
    }
  }
`;
