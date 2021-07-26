import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  width: 100%;
  max-width: 1920px;
  padding: 1rem 2rem;
  /* transform: translateY(5vh); */
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:nth-child(2) {
      color: black;
      font-size: 1.5rem;
    }
  }

  a {
    font-weight: bolder;
  }
`;
