import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import ContainerStyled from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <ContainerStyled>
          <h1>Hello world!</h1>
        </ContainerStyled>
      </>
    </ThemeProvider>
  );
}

export default App;
