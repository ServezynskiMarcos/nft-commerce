import {
  Avatar,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import CartOverlay from "./CartOverlay";
import DrawerMenu from "./Drawer";

const Nav = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [screen, setScreen] = useState("");

  useEffect(() => {
    const responsive = () =>
      window.innerWidth < 700 ? setScreen("mobile") : setScreen("desktop");
    responsive();
    window.addEventListener("resize", () => responsive());
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      p={4}
      w="full"
      alignItems="center"
    >
      <a href="/">
        {" "}
        <Text fontWeight="bold">NFT Commerce</Text>
      </a>
      {screen === "mobile" ? (
        <Stack>
          <DrawerMenu />
        </Stack>
      ) : null}

      <Stack
        direction="row"
        alignItems="center"
        spacing={8}
        display={{ base: "none", md: "flex" }}
      >
        <a href="/mercado">
          <Text fontWeight="bold">Monedas</Text>
        </a>{" "}
        <IconButton
          aria-label="toggle theme"
          size="sm"
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        />
        <CartOverlay />
        <Avatar src="'https://bit.ly/broken-link' " size={"sm"} />
      </Stack>
    </Stack>
  );
};

export default Nav;
