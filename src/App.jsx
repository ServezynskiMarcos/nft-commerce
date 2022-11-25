import { Container } from "@chakra-ui/react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import DetailCard from "./Components/DetailCard/DetailCard";
function App() {
  return (
    <Container minW="full" m={0} p={0}>
      <Nav />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/nft/:id"} element={<DetailCard />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
