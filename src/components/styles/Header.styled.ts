import styled from "styled-components";

const HeaderStyled = styled.header<{bg: string}>`
  background: ${(props) => props.bg};
  padding: 40px 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Logo = styled.img``;

export { HeaderStyled, Nav, Logo };