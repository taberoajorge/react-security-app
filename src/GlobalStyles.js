import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --main-color: #141C2F;
    --secondary-color: #1F2A48;
    --title: 2rem;
    --pr: 1.6rem;
    --card-width: 100%;
    --card-height: 45rem;
    --radius: 1rem;
    --max: 80rem;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
}
html {
    font-size: 62.5%;
    background-color: var(--main-color);
    color: white;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh
    width: 80%;
    margin: auto 1rem;
}

@media (min-width: 60rem){
    :root{
        --title: 2.8rem;
    }
    main {
        flex-direction: row;
    }
}

`;

export { GlobalStyle };
