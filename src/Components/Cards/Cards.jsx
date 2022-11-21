import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { data } from "../../assets/nfts.json";
import { AddToCart } from "../../Redux/Slices/Cart";

const Home = () => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    dispatch(AddToCart(e));
  };
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {data?.map((e, i) => {
        return (
          <Card maxW="sm" size="sm" key={i}>
            <CardBody>
              <Image src={e.image} alt={e.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{e.name}</Heading>
                <Text>{e.description}</Text>
                <Text color="blue.600" fontSize="2xl"></Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => handleAdd(e)}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Home;
