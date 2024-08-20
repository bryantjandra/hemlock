import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 12.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/hemlock-logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
