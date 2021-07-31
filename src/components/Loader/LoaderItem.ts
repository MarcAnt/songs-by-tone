import styled from "styled-components";

export const LoaderItem = styled.div`
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    /* transform: translateX(-100%); */
    background: linear-gradient(
      90deg,
      transparent,
      var(--bgColor),
      transparent
    );
    animation: loading 0.8s infinite;
  }
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  height: 50px;
  min-width: 250px;
  background-color: #66339921;
  border-radius: 4px;
`;
