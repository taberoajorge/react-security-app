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

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  // const [value, setValue] = React.useState("");
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);
  console.log(state);

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo validacion");

        if (state.value === SECURITY_CODE) {
          setState({ ...state, confirmed: true, error: false, loading: false });
        } else {
          setState({ ...state, error: true, loading: false });
        }

        console.log("Terminando validacion");
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <>
        <h1>Eliminar {name}</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>Por favor escribe el codigo de seguridad</span>
            {state.error && !state.loading && (
              <StyledError>Error: El codigo es incorrecto</StyledError>
            )}
            {state.loading && <Loading />}
            <input
              onChange={(event) => {
                setState({ ...state, value: event.target.value });
              }}
              value={state.value}
              type="text"
              placeholder="Codigo de seguridad"
            />
          </label>
          <input
            onClick={() => {
              setState({ ...state, loading: true });
            }}
            type="submit"
            value="Comprobar"
          />
        </form>
      </>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <h1 style={{ color: "white" }}>
          Estas segurx que quieres hacer este cambio?
        </h1>
        <div>
          <button
            onClick={() => setState({ ...state, confirmed: false, value: "" })}
          >
            No, disculpa dios
          </button>
          <button onClick={() => setState({ ...state, deleted: true })}>
            Si, totalmente si
          </button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <h1 style={{ color: "white" }}>Eliminado con exito</h1>
        <button
          onClick={() =>
            setState({ ...state, confirmed: false, value: "", deleted: false })
          }
        >
          Regresar, volver atras.
        </button>
      </>
    );
  }
}

export { UseState };
