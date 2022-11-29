import { Card, CardBody, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClearCart } from "../../Redux/Slices/Cart";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Paypal = () => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(ClearCart());
  };
  const navigate = useNavigate();
  const aproved = () => {
    navigate("/");
    clearCart();
    alert("You have a dinner");
  };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "5.04",
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture(aproved());
  };
  return (
    <Stack h="100vh" justifyContent={"center"} w="full" alignItems={"center"}>
      <Card
        w={{ base: "full", lg: "40%" }}
        h={{ base: "50%", lg: "70%" }}
        bg={"gray.300"}
        p={2}
      >
        <CardBody p={0}>
          <Text
            fontSize={{ base: "3xl", xl: "5xl" }}
            fontFamily={"primary"}
            color={"gray.800"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Complete su compra
          </Text>
        </CardBody>
        <Stack>
          <PayPalButton
            style={{
              shape: "pill",
              color: "blue",
              layout: "vertical",
              label: "paypal",
            }}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </Stack>
      </Card>
    </Stack>
  );
};

export default Paypal;
