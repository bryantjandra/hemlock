import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">hemlock</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variaton="primary"
                size="medium"
                onClick={() => {
                  alert("Check IN");
                }}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="small
              "
                onClick={() => {
                  alert("Check OUT");
                }}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
