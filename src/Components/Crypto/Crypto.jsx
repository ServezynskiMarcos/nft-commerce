import {
  Container,
  Icon,
  Image,
  Spinner,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import Loading from "./Loading";
const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {coins.length ? (
        <Container minW="full">
          <Text
            fontWeight={"bold"}
            fontFamily={"primary"}
            fontSize={{ base: "xs", md: "xl", lg: "2xl" }}
            textAlign={"center"}
            m={{ base: 0, xl: 6 }}
            marginBottom={{ base: 2, xl: 12 }}
          >
            Precios de las criptomonedas según la capitalización del mercado
          </Text>
          <TableContainer>
            <Table variant="simple" colorScheme={"secondary"}>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Moneda</Th>
                  <Th>Precio</Th>
                  <Th>Volumen en 24h</Th>
                  <Th>Últimos 7 días</Th>
                </Tr>
              </Thead>
              {coins?.map((e) => {
                return (
                  <Tbody>
                    <Td>
                      <Stack direction={"row"} alignItems={"center"}>
                        <Icon as={BsStar} />
                        <Text>{e.market_cap_rank}</Text>
                      </Stack>
                    </Td>
                    <Td>
                      <Stack direction={"row"} alignItems={"center"}>
                        <Image src={e.image} w={7} /> <Text>{e.name}</Text>
                      </Stack>
                    </Td>
                    <Td>${e.current_price.toLocaleString("es-ES")}</Td>
                    <Td>${e.total_volume.toLocaleString("es-ES")}</Td>
                    <Td isNumeric>
                      <Sparklines data={e.sparkline_in_7d.price}>
                        <SparklinesLine
                          color="teal"
                          style={{ strokeWidth: 1, fill: "none" }}
                        />
                        <SparklinesSpots />
                      </Sparklines>
                    </Td>
                  </Tbody>
                );
              })}
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Crypto;
