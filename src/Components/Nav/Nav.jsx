import { IconButton, Stack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import CartOverlay from "./CartOverlay";

const Nav = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      p={4}
      w="full"
      alignItems="center"
    >
      <Text fontWeight="bold">NFT Commerce</Text>

      <Stack direction="row" alignItems="center" spacing={8}>
        <a href="#colecciones">
          <Text fontWeight="bold">Colecciones</Text>
        </a>{" "}
        <IconButton
          aria-label="toggle theme"
          size="sm"
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        />
        <CartOverlay />
      </Stack>
    </Stack>
  );
};

export default Nav;
