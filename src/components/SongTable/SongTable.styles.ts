import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem auto 0 auto;
  max-width: 1000px;
  min-width: 300px;
  align-content: flex-start;

  @media (max-width: 1024px) {
    margin: 1.5rem 2rem;
  }
`;
