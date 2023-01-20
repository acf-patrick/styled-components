import { Nav, Logo, Image, HeaderStyled } from "./styles/Header.styled";
import Button from "./styles/Button.styled";
import ContainerStyled from "./styles/Container.styled";
import FlexStyled from "./styles/Flex.styled";
import logo from "../assets/images/logo.svg";
import image from "../assets/images/illustration-mockups.svg";

function Header() {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Nav>
          <Logo src={logo} alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <FlexStyled>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="white">
              Get Started For Free
            </Button>
          </div>
          <Image src={image} alt=""/>
        </FlexStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
