import React from "react";
import styled from "styled-components";
import { Loading } from "../Loading";

const StyledError = styled.span`
  background-color: red;
  margin-top: 1rem;
  border-radius: var(--radius);
  padding: 1rem;
  font-weight: bold;
`;
const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }

  componentDidUpdate() {
    console.log("Me monto cada que actualizas");
    if (this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo validacion");
        if (this.state.value === SECURITY_CODE) {
          // setError(false);
          console.log("epale");
        } else {
          this.setState({ error: true });
        }
        this.setState({ loading: false });
        console.log("Terminando validacion");
      }, 3000);
    }
  }

  render() {
    return (
      <>
        <h1>Eliminar {this.props.name}</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>Por favor escribe el codigo de seguridad</span>
            {this.state.error && !this.state.loading && (
              <StyledError>Error: El codigo es incorrecto</StyledError>
            )}
            {this.state.loading && <Loading />}
            <input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
              type="text"
              placeholder="Codigo de seguridad"
            />
          </label>
          <input
            onClick={() => this.setState({ loading: true, error: false })}
            type="submit"
            value="Comprobar"
          />
        </form>
      </>
    );
  }
}

export { ClassState };
