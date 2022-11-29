import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { app } from "../../fb";
import CartOverlay from "./CartOverlay";
import DrawerMenu from "./Drawer";
const Nav = ({ userLog }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [screen, setScreen] = useState("");

  useEffect(() => {
    const responsive = () =>
      window.innerWidth < 700 ? setScreen("mobile") : setScreen("desktop");
    responsive();
    window.addEventListener("resize", () => responsive());
  }, []);

  const signOut = () => {
    app.auth().signOut();
    localStorage.removeItem("user");
    location.reload();
  };
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
        <Stack direction={"row"} alignItems="center" spacing={4}>
          <Icon
            onClick={toggleColorMode}
            as={colorMode === "dark" ? FaSun : FaMoon}
          />
          <DrawerMenu />
          {userLog ? (
            <Menu>
              <MenuButton colorScheme="pink">
                <Avatar
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                  size={"sm"}
                />
              </MenuButton>
              <MenuList>
                <MenuGroup title={userLog.email}>
                  <MenuItem onClick={signOut}>Cerrar Sesión</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton colorScheme="pink">
                <Avatar src="https://bit.ly/broken-link" size={"sm"} />
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
              </MenuList>
            </Menu>
          )}
        </Stack>
      ) : null}
      <Stack
        direction="row"
        alignItems="center"
        spacing={8}
        display={{ base: "none", md: "flex" }}
      >
        <Icon
          onClick={toggleColorMode}
          as={colorMode === "dark" ? FaSun : FaMoon}
        />
        <a href="/mercado">
          <Text fontWeight="bold" fontFamily={"primary"}>
            El mercado
          </Text>
        </a>{" "}
        <CartOverlay />
        {userLog ? (
          <Menu>
            <MenuButton colorScheme="pink">
              <Avatar
                src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                size={"sm"}
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title={userLog.email}>
                <MenuItem onClick={signOut}>Cerrar Sesión</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuButton colorScheme="pink">
              <Avatar src="https://bit.ly/broken-link" size={"sm"} />
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
            </MenuList>
          </Menu>
        )}
      </Stack>
    </Stack>
  );
};

export default Nav;
