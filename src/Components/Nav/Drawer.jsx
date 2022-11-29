import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import CartOverlay from "./CartOverlay";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const color = useColorModeValue("gray.700", undefined);

  return (
    <Stack>
      <Icon
        as={BsMenuButtonWide}
        color={color}
        fontSize={"20px"}
        ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={"secondary.500"} color={"white"}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack alignItems="center" spacing={8}>
              <a href="/mercado">
                <Text fontWeight="bold" fontFamily={"primary"} fontSize={"2xl"}>
                  El mercado
                </Text>
              </a>{" "}
              <CartOverlay />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default DrawerMenu;
