import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode
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
        <Text fontWeight="bold" fontFamily={"primary"}>
          NFT Commerce
        </Text>
      </a>
      {screen === "mobile" ? (
        <Stack direction={"row"} alignItems="center">
          <IconButton
            aria-label="toggle theme"
            size="sm"
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            variant="unstyled"
          />
          <DrawerMenu />
        </Stack>
      ) : null}

      <Stack
        direction="row"
        alignItems="center"
        spacing={8}
        display={{ base: "none", md: "flex" }}
      >
        <IconButton
          aria-label="toggle theme"
          size="sm"
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          variant="unstyled"
        />
        <a href="/mercado">
          <Text fontWeight="bold" fontFamily={"primary"}>
            Monedas
          </Text>
        </a>{" "}
        <CartOverlay />
        <Menu>
          <MenuButton colorScheme="pink">
            <Avatar src="'https://bit.ly/broken-link' " size={"sm"} />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <a href="/newAccount">
                <MenuItem>Crear Cuenta</MenuItem>
              </a>
            </MenuGroup>
            <MenuGroup>
              <a href="/log">
                <MenuItem>Iniciar Sesión</MenuItem>
              </a>
            </MenuGroup>

            <MenuDivider />
            <MenuGroup>
              <MenuItem>Cerrar Sesión</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Nav;
