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
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
    >
      {data?.map((e, i) => {
        return (
          <Card maxW="sm" size="sm" key={i}>
            <CardBody>
              <Image src={e.image} alt={e.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Stack direction="row" justifyContent="space-between">
                  <Heading size="md">{e.name}</Heading>
                  <Text>{e.description}</Text>
                </Stack>

                <Text color="blue.600" fontSize="2xl">
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
              <Button variant="solid" colorScheme="orange">
                Buy now
              </Button>
              <Button
                variant="ghost"
                colorScheme="orange"
                onClick={() => handleAdd(e.id)}
              >
                Add to cart
              </Button>
            </Stack>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Home;
