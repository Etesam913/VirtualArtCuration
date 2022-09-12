import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {

    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.secondary};
    transition: background 200ms ease-in-out;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }

`;

export default function App() {
  const [isLightThemeOn, setIsLightThemeOn] = useState(false);

  return (
    <ThemeProvider theme={isLightThemeOn ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <ThemeButtonContainer>
          <ThemeButton
            isLightThemeOn={isLightThemeOn}
            setIsLightThemeOn={setIsLightThemeOn}
          />
        </ThemeButtonContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

const MainContainer = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.primary};
  width: 100%;
  width: min(90%, 60rem);
  margin: 1rem auto;
  transition: color 200ms ease-in-out; ;
`;

const ThemeButtonContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
