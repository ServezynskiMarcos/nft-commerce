import { Stack } from "@chakra-ui/react";
import React from "react";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <Stack p={12}>
      <Cards />
    </Stack>
  );
};

export default Home;