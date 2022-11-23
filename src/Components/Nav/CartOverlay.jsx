import {
  Box,
  Button,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCart4, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart, RemoveToCart } from "../../Redux/Slices/Cart";

const CartOverlay = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { carrito } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(RemoveToCart(id));
  };
  const clearCart = () => {
    dispatch(ClearCart());
  };
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        position="fixed"
        zIndex={100}
        right={2}
        fontWeight="bold"
        
      >
        <Icon as={BsCart4} />
        <Text>{carrito.length ? carrito.length : null}</Text>
      </Stack>

      <Box>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                {carrito.map((e) => {
                  return (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Image src={e.image} w={20} h={20} />
                      <Text color="whatsapp.500" fontWeight="bold">
                        {e.name}
                      </Text>
                      <Text color="whatsapp.500" fontWeight="bold">
                        {e.price}
                      </Text>
                      <Button onClick={() => remove(e.id)} color="orange">
                        x
                      </Button>
                    </Stack>
                  );
                })}
              </Stack>
            </ModalBody>
            <ModalFooter>
              {carrito.length > 0 ? (
                <Button onClick={clearCart}>clear cart</Button>
              ) : null}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default CartOverlay;
