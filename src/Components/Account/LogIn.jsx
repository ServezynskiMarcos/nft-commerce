import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../fb";

const LogIn = () => {
  const [logUser, setLogUser] = useState({
    correo: "",
    contrasena: "",
  });

  const handleChange = (e) => {
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };
  const [alerta, setAlerta] = useState(false);
  const navigate = useNavigate();

  const Login = () => {
    app
      .auth()
      .signInWithEmailAndPassword(logUser.correo, logUser.contrasena)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((err) => {
        setAlerta(true);
      });
  };
  const isError = {
    email: logUser.correo === "",
    pass: logUser.contrasena.length < 6,
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
        <FormLabel textAlign={"center"}>Email</FormLabel>
        <Input type="email" onChange={handleChange} name="correo" />
        {logUser.correo === "" ? (
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
        {logUser.contrasena === "" ? (
          <FormErrorMessage color="secondary.500">
            Debe ingresar una contraseña.
          </FormErrorMessage>
        ) : null}
        {logUser.contrasena.length < 6 ? (
          <FormErrorMessage color="secondary.500">
            La contraseña debe tener 6 o más caracteres.
          </FormErrorMessage>
        ) : null}
      </FormControl>
      <Button onClick={Login} type={"submit"}>
        Ingresar
      </Button>
      {alerta && (
        <Alert status="error" w={"30%"}>
          <AlertIcon />
          <AlertDescription>
            Comprueba que tus datos sean correctos.
          </AlertDescription>
        </Alert>
      )}
    </Stack>
  );
};

export default LogIn;
