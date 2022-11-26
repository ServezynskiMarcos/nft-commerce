import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay,
    Icon, Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import CartOverlay from "./CartOverlay";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant={"unstyled"}>
        <Icon as={BsMenuButtonWide} color="white" fontSize={"20px"} />
      </Button>
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
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack alignItems="center" spacing={8}>
              <a href="/mercado">
                <Text fontWeight="bold">Monedas</Text>
              </a>{" "}
              <CartOverlay />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
