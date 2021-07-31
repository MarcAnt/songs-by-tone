import styled from "styled-components";

export const CardItem = styled.div`
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

  &:hover {
    transform: translateY(0.25rem);
  }
`;
