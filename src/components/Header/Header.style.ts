import styled from "styled-components";

export const HeaderWrapper = styled.header`
  text-align: center;
  width: 100%;
  max-width: 1920px;
  padding: 1rem 2rem;

  p {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-weight: bold;
  }

  nav {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    a.create {
      font-weight: bolder;
      /* background-color: var(--bgColor);
      border: 1px solid var(--btnBgColor); */
      box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
      border-radius: 4px;
      color: var(--generalColor);
      background-color: var(--btnBorderDark);
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
    }

    a.create:hover {
      background-color: var(--btnBorder);
    }
  }

  @media (max-width: 768px) {
    a.create {
      font-size: 0.9rem;
    }
  }
`;
