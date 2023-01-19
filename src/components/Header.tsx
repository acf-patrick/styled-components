import { Nav, Logo, HeaderStyled } from "./styles/Header.styled";
import Button from "./styles/Button.styled";
import ContainerStyled from "./styles/Container.styled";

function Header() {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
      </ContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
