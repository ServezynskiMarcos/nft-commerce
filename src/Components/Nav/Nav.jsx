import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsCart4 } from "react-icons/bs";

const Nav = () => {

  return (
    <Stack direction="row" justifyContent="space-between" p={4} bg="orange.500">
      <Text fontWeight="bold">NFT Commerce</Text>
      <Icon as={BsCart4} />
      
    </Stack>
  );
};

export default Nav;
