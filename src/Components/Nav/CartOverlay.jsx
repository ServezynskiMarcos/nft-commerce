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
import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart, RemoveToCart } from "../../Redux/Slices/Cart";

const CartOverlay = () => {
  const OverlayCart = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayCart />);
  const { carrito } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

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
          setOverlay(<OverlayCart />);
          onOpen();
        }}
        fontWeight="bold"
      >
        <Icon as={BsCart4} />
        <Text>{carrito.length ? carrito.length : null}</Text>
      </Stack>

      <Box>
        <Modal
          size={{ base: "sm", md: "xl" }}
          isOpen={isOpen}
          onClose={onClose}
        >
          {overlay}
          <ModalContent>
            <ModalHeader>Carrito</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                {carrito.length < 1 ? (
                  <Text fontFamily="primary" textAlign="center">
                    Tu carrito se encuentra vacio
                  </Text>
                ) : (
                  carrito.map((e, i) => {
                    return (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        key={i}
                      >
                        <Image src={e.image} w={20} h={20} borderRadius={999} />
                        <Text color="secondary.500" fontWeight="bold">
                          Nombre: {e.name}
                        </Text>
                        <Text color="secondary.500" fontWeight="bold">
                          Total: {e.price}
                        </Text>
                        <Button onClick={() => remove(e.id)} color="orange">
                          x
                        </Button>
                      </Stack>
                    );
                  })
                )}
              </Stack>
            </ModalBody>
            <ModalFooter>
              {carrito.length > 0 ? (
                <Stack direction="row" spacing={2}>
                  <a href="/buy">
                    <Button>ir a pagar</Button>
                  </a>
                  <Button onClick={clearCart}>vaciar carrito</Button>
                </Stack>
              ) : null}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default CartOverlay;
