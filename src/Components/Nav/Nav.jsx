import {
  Stack,
  Text
} from "@chakra-ui/react";
import React from "react";
import CartOverlay from "./CartOverlay";

const Nav = () => {

  return (
    <Stack direction="row" justifyContent="space-between" p={4} color="orange.500" w="full">
      <Text fontWeight="bold">NFT Commerce</Text>
      <CartOverlay />
    </Stack>
  );
};

export default Nav;
