import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import ContainerStyled from "./components/styles/Container.styled";
import Card from "./components/Card";
import Footer from "./components/Footer";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ContainerStyled>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ContainerStyled>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
