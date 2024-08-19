import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">hemlock</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button
          onClick={() => {
            alert("Check IN");
          }}
        >
          Check in
        </Button>
        <Button
          onClick={() => {
            alert("Check IN");
          }}
        >
          Check out
        </Button>

        <Heading as="h3">form</Heading>
        <Input type="number" placeholder="Number of guests"></Input>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
