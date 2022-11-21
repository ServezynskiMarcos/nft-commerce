import { Container } from "@chakra-ui/react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Container maxW="full" m={0} p={0}>
      <Nav />
      <Home />
    </Container>
  );
}

export default App;
