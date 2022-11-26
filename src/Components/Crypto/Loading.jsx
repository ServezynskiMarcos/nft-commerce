import { Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Stack h={"100vh"} justifyContent={'center'} alignItems={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="secondary.500"
        size="xl"
      />
      <Text fontFamily={'primary'} fontWeight={'bold'} fontSize={'xl'}>Loading</Text>
    </Stack>
  );
};

export default Loading;
