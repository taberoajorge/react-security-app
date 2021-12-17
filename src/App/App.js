import React from "react";
import { UseState } from "../UseState";
import { ClassState } from "../ClassState";
import { GlobalStyle } from "../GlobalStyles";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: var(--secondary-color);
  width: var(--card-width);
  max-width: var(--max);
  height: var(--card-height);
  border-radius: var(--radius);
  margin: 2rem;
  padding: 2rem;
  font-size: var(--title);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > form,
  & label {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  & input[type="text"] {
    background: var(--main-color);
    border-radius: var(--radius);
    border: 0.2rem solid white;
    color: white;
    padding: 1rem;
    &::placeholder {
      color: white;
    }
    margin: 2rem;
  }
  & input[type="submit"] {
    background: var(--secondary-color);
    border-radius: var(--radius);
    border: 0.2rem solid white;
    color: white;
    padding: 1rem;
  }
`;

function App() {
  return (
    <main>
      <GlobalStyle />
      <StyledCard>
      
        <UseState name="USE State"/>
      
      </StyledCard>
      <StyledCard>
      
        <ClassState name="CLASS State" />
      
      </StyledCard>
    </main>
  );
}

export default App;
