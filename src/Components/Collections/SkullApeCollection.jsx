import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SkullApe } from "../../assets/nfts.json";
import { AddToCart } from "../../Redux/Slices/Cart";


const SkullApeCollection = () => {
  const dispatch = useDispatch();
  const bgcolor = useColorModeValue("gray.200", undefined);

  const handleAdd = (e) => {
    dispatch(AddToCart(e));
  };

  return (
    <Accordion defaultIndex={[0]} allowMultiple fontFamily="secondary" >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" color="secondary.500" fontWeight="bold">
              Skull Ape
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
            p={4}
          >
            {SkullApe?.map((e, i) => {
              return (
                <Card maxW="sm" size="sm" key={i} bg={bgcolor}>
                  <CardBody>
                    <Image src={e.image} alt={e.name} borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                      <Stack direction="row" justifyContent="space-between">
                        <Heading size="md">{e.name}</Heading>
                        <Text>{e.description}</Text>
                      </Stack>

                      <Text color="secondary.500" fontSize="2xl">
                        {e.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <Stack
                    direction={{ base: "column", lg: "row" }}
                    justifyContent="space-around"
                    p={4}
                  >
                    <Button variant="solid" colorScheme="secondary">
                      Comprar
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="secondary"
                      onClick={() => handleAdd(e.id)}
                    >
                      Añadir al carrito
                    </Button>
                  </Stack>
                </Card>
              );
            })}
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SkullApeCollection;
