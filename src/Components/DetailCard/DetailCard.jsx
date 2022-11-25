import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Card,
  CardBody, Container,
  Divider,
  Icon, Image,
  Stack, Text,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { BsBoxArrowUpRight, BsShare } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../Redux/Slices/Cart";

const DetailCard = () => {
  const { Sheels } = useSelector((state) => state.cartReducer.allProducts.nfts);
  const { SkullApe } = useSelector(
    (state) => state.cartReducer.allProducts.nfts
  );
  const { id } = useParams();

  const sheels = Sheels.find((e) => e.id === id);
  const skull = SkullApe.find((e) => e.id === id);
  const active = id < 13 ? "skull" : "sheels";

  const copyLink = () => {
    const aux = document.createElement("input");
    aux.setAttribute("value", window.location.href.split("?")[0].split("#")[0]);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  };

  const bgcolor = useColorModeValue("gray.300", "gray.800");
  const infoColor = useColorModeValue("gray.300", "gray.700");

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    dispatch(AddToCart(e));
  };
  return (
    <Container
      minW="full"
      minH={"100vh"}
      display="flex"
      flexDirection={"column"}
      gap={4}
    >
      <Card p={2} minW="full">
        <CardBody
          p={0}
          display="flex"
          justifyContent={"space-around"}
          w="100%"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Stack w={{ base: "full", md: "50%" }} alignItems={"center"}>
            {" "}
            <Image
              src={active === "skull" ? skull.image : sheels.image}
              w={{ base: "360px", md: "400px" }}
              h={{ base: "360px", md: "400px" }}
              borderRadius="20px"
              zIndex={100}
            />
          </Stack>
          <Stack
            w={{ base: "full", md: "50%" }}
            paddingX={{ base: 6, lg: 12 }}
            paddingY={4}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Text fontFamily={"secondary"} fontSize={"lg"}>
                {active === "skull" ? skull.collection : sheels.collection}
              </Text>
              <Tooltip label="Copiar Link" placement="bottom">
                <Button
                  onClick={() => copyLink()}
                  p={2}
                  w={6}
                  colorScheme={"secondary"}
                >
                  <Icon as={BsShare} w={5} h={5} />
                </Button>
              </Tooltip>
            </Stack>
            <Text
              fontFamily={"primary"}
              fontSize={{ base: "xl", md: "3xl", xl: "5xl" }}
              fontWeight={"bold"}
              textAlign={{ base: "center", md: "start" }}
            >
              {active === "skull" ? skull.name : sheels.name}
            </Text>
            <Stack direction={"row"} alignItems={"center"}>
              <Avatar
                src="https://looksrare.mo.cloudinary.net/0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623/0x382a55597f028e2192fdedba5af353288bf4e178f333fb41293f71b2c9065b72?resource_type=image&f=auto&c=limit&w=128&q=auto"
                size={"sm"}
              />
              <Stack>
                <Stack direction="row" alignItems={"center"}>
                  <Text fontFamily={"secondary"}>
                    {active === "skull"
                      ? skull.creatorName
                      : sheels.creatorName}
                  </Text>
                  <Icon as={BiBadgeCheck} w={5} h={5} color="secondary.500" />
                </Stack>
                <Text as={"sup"} fontWeight={"bold"} color={"secondary.500"}>
                  {active === "skull" ? skull.token : sheels.token}
                </Text>
              </Stack>
            </Stack>
            <Stack>
              <Card
                bg={bgcolor}
                variant={"outline"}
                paddingY={{ base: 0, xl: 6 }}
                display="flex"
                alignItems={{ base: "center", lg: "stretch" }}
              >
                <CardBody
                  display={"flex"}
                  justifyContent={"space-between"}
                  flexDirection={{ base: "column", xl: "row" }}
                >
                  <Stack
                    justifyContent={"space-between"}
                    alignItems={{ base: "center", xl: "stretch" }}
                  >
                    <Stack>
                      <Text as={"sub"} fontFamily={"primary"}>
                        Precio actual
                      </Text>
                      <Stack alignItems={"center"} direction="row">
                        <Icon as={FaEthereum} h={4} />
                        <Text
                          fontFamily={"primary"}
                          fontWeight={"bold"}
                          fontSize={"lg"}
                        >
                          5.4033
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      textAlign={"center"}
                    >
                      <Text>Tiempo restante</Text>
                      <Text fontWeight={"bold"}>4d 18h</Text>
                    </Stack>
                  </Stack>

                  <Stack alignItems={{ base: "center", xl: "stretch" }}>
                    <Button w={{ base: 52, lg: 60 }} colorScheme="secondary">
                      Comprar
                    </Button>
                    <Button
                      w={{ base: 52, lg: 60 }}
                      onClick={() => handleAdd(id)}
                    >
                      Agregar al carrito
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
      <Stack minH={"70vh"} fontFamily="primary">
        <Accordion
          allowToggle
          allowMultiple
          minW="full"
          bg={infoColor}
          borderRadius={8}
          borderColor={"transparent"}
          h={14}
        >
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "secondary.500", color: "white" }}
                h={14}
                borderRadius={8}
              >
                <Box flex="1" textAlign="left" fontWeight={"bold"}>
                  Info Token
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bg={infoColor}>
              <Stack justifyContent={"space-between"}>
                <Stack direction="row" justifyContent={"space-between"}>
                  <Text>ID Token:</Text>
                  <Text>{active === "skull" ? skull.token : sheels.token}</Text>
                </Stack>

                <Stack direction="row" justifyContent={"space-between"}>
                  <Text>Blockchain:</Text>
                  <Text>Ethereum</Text>
                </Stack>

                <Stack direction="row" justifyContent={"space-between"}>
                  <Text>Token Standard:</Text>
                  <Text> ERC721</Text>
                </Stack>

                <Divider />
                <Stack direction="row" justifyContent={"space-between"}>
                  <Text> Contract: </Text>
                  <Text color="secondary.500">
                    <a href="https://etherscan.io/" target="_blank">
                      0x...757f <Icon as={BsBoxArrowUpRight} />
                    </a>
                  </Text>
                </Stack>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  );
};

export default DetailCard;
