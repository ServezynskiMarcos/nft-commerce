import { Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPersonFill,
} from "react-icons/bs";

const Footer = () => {
  const bgcolor = useColorModeValue("gray.200", undefined);

  return (
    <Stack
      h="30vh"
      w="full"
      bg={bgcolor}
      direction={{base: "column", md:"row"}}
      justifyContent="space-between"
      alignItems="center"
      p={12}
      spacing={4}
    >
      <Stack textAlign="center">
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Informacion
        </Text>
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Contacto
        </Text>
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Ayuda
        </Text>
      </Stack>
      <Stack textAlign="center">
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Metodos de pago
        </Text>
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Devoluciones
        </Text>
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Informar un problema
        </Text>
      </Stack>
      <Stack textAlign="center">
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Quienes somos
        </Text>
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Trabaja con nosotros
        </Text>
        <Text fontWeight="bold" fontSize={{base: "xs", md:"lg"}}>
          Idioma
        </Text>
      </Stack>
      <Stack spacing={6} direction={{base: "row", md:"column"}}>
        <a
          href="https://www.linkedin.com/in/marcos-servezynski/"
          target="_blank"
        >
          <Icon as={BsLinkedin} w={5} h={5} />
        </a>
        <a href="https://github.com/ServezynskiMarcos" target="_blank">
          <Icon as={BsGithub} w={5} h={5} />
        </a>
        <a href="https://servezynski-portfolio.vercel.app/" target="_blank">
          <Icon as={BsPersonFill} w={5} h={5} />
        </a>
      </Stack>
    </Stack>
  );
};

export default Footer;
