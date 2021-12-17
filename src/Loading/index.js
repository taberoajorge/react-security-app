import React from "react";
import styled from "styled-components";

const StyledLoading =  styled.h1`
  background-color: var(--main-color);
  margin-top: 1rem;
  border-radius: var(--radius);
  padding: 1rem;
  font-weight: bold;
`;

class Loading extends React.Component {
  // componentWillUnmount() {
  //   console.log("Este metodo se ejecuto en: Despues del desmontaje");
  // }
  render() {
    return (
      <>
        <StyledLoading>Cargando...</StyledLoading>
      </>
    );
  }
}

export { Loading };
