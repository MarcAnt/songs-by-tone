import styled from "styled-components";

export const FormWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    flex: 70%;
    p {
      padding-left: 2rem;
      padding-bottom: 1rem;
      font-size: 2rem;
      font-weight: bolder;
      width: 60%;
      text-shadow: 3px 3px 2px #b299cc;

      span {
        color: var(--btnBgColor);
      }
    }
  }

  span {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    max-height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    button[type="button"] {
      width: auto;
      border-radius: 2px;
      letter-spacing: 0.05rem;
      text-transform: none;
      font-size: 0.8rem;
    }
    button[type="button"]:hover {
      border: none;
    }
  }

  form {
    /* flex: 40%; */
    margin: 2rem;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 1px 1px 0 2.5px var(--btnBorderDark);

    span button {
      background-color: var(--btnBorder);
      box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
      color: var(--generalColor);
      padding: 0.2rem;
      margin: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 20px;
    }

    .inputsContainer {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      min-height: 200px;
      margin-bottom: 0.5rem;
      gap: 2rem;
    }

    .formControl:nth-child(1) {
      flex: 30%;
    }
    .formControl {
      flex: 50%;
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      input[type="text"] {
        margin: 0.5rem 0;
        width: 100%;
      }
    }

    input {
      border: none;
      box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
    }

    input[type="text"]:focus {
      box-shadow: 1px 1px 0 2.5px var(--btnBgColor),
        0 0 0.2rem 0.25rem #66339950;
    }

    input[type="text"] {
      width: 100%;
    }

    input[type="submit"] {
      border-radius: 4px;
      background-color: var(--btnBorder);
      box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
      color: var(--generalColor);
    }

    input:focus {
      border: none;
    }
  }

  @media (max-width: 1024px) {
    section p {
      font-size: 1.5rem;
      width: 100%;
    }

    form {
      flex: 60%;
      span,
      input[type="text"] {
        width: 100%;
      }

      span button[type="button"] {
        padding: 0 0.2rem;
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 768px) {
    section p {
      font-size: 1.5rem;
    }

    form {
      span,
      input[type="text"] {
        width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .inputsContainer {
      flex-direction: column;
      .formControl {
        width: 100%;
      }
    }

    section p {
      font-size: 1rem;
      text-align: center;
      padding-bottom: 1rem;
      margin: 0 auto;
    }
    section {
      padding-top: 2rem;
      flex: auto;
    }

    form {
      flex: 100%;
      width: 80%;
    }
  }
`;
