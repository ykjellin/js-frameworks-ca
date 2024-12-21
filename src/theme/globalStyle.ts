import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat-subrayada";
import "@fontsource/montserrat";

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
}

button {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    margin-top: 1rem;
    box-shadow: ${(props) => props.theme.shadows.button};

    

    &:hover {
      background-color: #0056b3;
    }
  }
 




`;

export default GlobalStyle;
