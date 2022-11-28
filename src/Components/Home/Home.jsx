import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { GiCutDiamond } from "react-icons/gi";
import present from "../../assets/present.png";

const Home = () => {
  const color = useColorModeValue("white", undefined);
  const bgcolor = useColorModeValue("gray.300", undefined);

  return (
    <Stack spacing={20}>
      <Stack backgroundImage={present} backgroundSize="cover">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          backdropFilter="auto"
          backdropBlur="30px"
          h={"100vh"}
          w="full"
        >
          <Stack
            w={{ base: "full", md: "50%" }}
            alignItems={{ base: "center", lg: "start" }}
            spacing={0}
          >
            <Text
              fontSize={{ base: "4xl", lg: "6xl" }}
              fontFamily="primary"
              fontWeight="bold"
              color={color}
              textAlign={{ base: "center", lg: "start" }}
            >
              Los mejores NFTs
            </Text>
          </Stack>
          <Card
            p={2}
            bg={bgcolor}
            maxW={{ base: "sm", xl: "md" }}
            maxH={{ base: "md", xl: "lg" }}
            size="md"
          >
            <CardHeader p={2} alignItems="center" display="flex" gap={2}>
              <Icon
                as={GiCutDiamond}
                w={{ base: 4, lg: 6 }}
                h={{ base: 4, lg: 6 }}
              />
              <a href="#popular">
                <Text fontWeight="bold">Coleccion popular</Text>
              </a>
            </CardHeader>
            <CardBody>
              <Image src={present} borderRadius="20px" />
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
