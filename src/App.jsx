import { Container } from "@chakra-ui/react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import DetailCard from "./Components/DetailCard/DetailCard";
import Crypto from "./Components/Crypto/Crypto";
function App() {
  return (
    <Container minW="full" m={0} p={0}>
      <Nav />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/nft/:id"} element={<DetailCard />} />
        <Route exact path={"/mercado"} element={<Crypto/>} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
