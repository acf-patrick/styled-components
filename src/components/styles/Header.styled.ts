import styled from "styled-components";

const HeaderStyled = styled.header<{ bg?: string }>`
  background: ${(props) => props.bg};
  padding: 40px 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export { HeaderStyled, Nav, Logo, Image };
