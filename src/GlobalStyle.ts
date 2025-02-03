import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #300;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    
  }
`;
