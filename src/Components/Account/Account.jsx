import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Account = () => {
  const [nuevoUser, setNuevoUser] = useState({
    correo: "",
    contrasena: "",
    displayName: "",
  });

  const handleChange = (e) => {
    setNuevoUser({
      ...nuevoUser,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(
      auth,
      nuevoUser.correo,
      nuevoUser.contrasena,
      nuevoUser.displayName
    );
  };
  const isError = {
    email: nuevoUser.correo === "",
    pass: nuevoUser.contrasena.length < 6,
  };

  return (
    <Stack
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={4}
    >
      <FormControl
        isInvalid={isError.email || isError.pass}
        w={{ base: "full", md: "50%", xl: "30%" }}
      >
        <FormLabel textAlign={"center"}>Nombre de Usuario</FormLabel>
        <Input type="email" onChange={handleChange} name="displayName" />
        <FormLabel textAlign={"center"}>Email</FormLabel>
        <Input type="email" onChange={handleChange} name="correo" />
        {nuevoUser.correo === "" ? (
          <FormErrorMessage color="secondary.500">
            Ingrese su correo.
          </FormErrorMessage>
        ) : null}
        <FormLabel textAlign={"center"}>Password</FormLabel>
        <Input
          type="password"
          onChange={handleChange}
          name="contrasena"
          isRequired
        />
        {nuevoUser.contrasena === "" ? (
          <FormErrorMessage color="secondary.500">
            Debe ingresar una contraseña.
          </FormErrorMessage>
        ) : null}
        {nuevoUser.contrasena.length < 6 ? (
          <FormErrorMessage color="secondary.500">
            La contraseña debe tener 6 o más caracteres.
          </FormErrorMessage>
        ) : null}
      </FormControl>
      <Button onClick={handleSubmit} type={"submit"}>
        Ingresar
      </Button>
    </Stack>
  );
};

export default Account;
