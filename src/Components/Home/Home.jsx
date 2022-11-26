import {
  Card,
  CardBody,
  CardFooter,
  CardHeader, Icon, Image,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { GiCutDiamond } from "react-icons/gi";
import present from "../../assets/present.png";
import Cards from "../Cards/Cards";


const Home = () => {
  const color = useColorModeValue("white", undefined);
  const bgcolor = useColorModeValue("gray.300", undefined);
  return (
    <Stack spacing={20}>
      <Stack backgroundImage={present} backgroundSize="cover">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          backdropFilter="auto"
          backdropBlur="30px"
          h={"90vh"}
          w="full"
        >
          <Stack
            w={{ base: "full", md: "50%" }}
            alignItems={{ base: "center", lg: "start" }}
            
          >
            <Text
              fontSize={{ base: "lg", md: "6xl" }}
              fontFamily="primary"
              fontWeight="bold"
              color={color}
              textAlign={{ base: "center", lg: "start" }}
            >
              Los mejores NFTs
            </Text>
            <Text fontSize={{ base: "lg", md: "2xl" }} color={color}  fontFamily="secondary" textAlign={{ base: "center", lg: "start" }}>
              Donde los comerciantes
            </Text>{" "}
            <Text
              color="secondary.500"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily="secondary"
              fontWeight="bold"
              textAlign={{ base: "center", lg: "start" }}
            >
              han ganado más de $1.300 millones de dólares.
            </Text>
          </Stack>
          <Card p={2} bg={bgcolor}>
            <CardHeader p={2} alignItems="center" display="flex" gap={2}>
              <Icon as={GiCutDiamond} w={6} h={6} />
              <a href="#popular"><Text fontWeight="bold">Coleccion popular</Text></a>
            </CardHeader>
            <CardBody p={0}>
              <Image
                src={present}
                w={{ base: "360px", md: "460px" }}
                height={{ base: "360px", md: "460px" }}
                borderRadius="20px"
                zIndex={100}
              />
            </CardBody>
            <CardFooter p={1} justifyContent="center">
              <Stack direction="row" alignItems="center">
                <Text fontWeight="bold"> Shellz #7</Text>
                <Icon as={BiBadgeCheck} w={5} h={5} color="secondary.500" />
              </Stack>
            </CardFooter>
          </Card>
        </Stack>
      </Stack>
      <Cards />
    </Stack>
  );
};

export default Home;
