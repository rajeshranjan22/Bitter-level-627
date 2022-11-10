import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SscrollBoxOption() {
  return (
    <Box>
      <Box
        border={"1px solid black"}
        width={"85%"}
        h={"300px"}
        margin={"auto"}
        borderRadius={"10px"}
        overflow={"scroll"}
      >
        <Box
          width={"97%"}
          height={"100px"}
          borderBottom={"1px solid black"}
          margin={"auto"}
        >
          <Text fontSize={"3xl"} fontWeight={500}>
            More trip options
          </Text>

          <Text cursor={"pointer"} color={"blue"} fontWeight={500} mt={"12px"}>
            Explore a world of travel with Expedia
          </Text>
        </Box>

        <Box w={"97%"} margin={"auto"}>
          <Box mb={"10px"} mt={"15px"} fontWeight={500} fontSize={"2xl"}>
            Domestic flights
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={0}>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Darbhanga
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Gulbarga
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Kannur
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Sikkim
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Bareilly
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Gangtok
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Jharsuguda
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Kurnool
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Ajmer
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Malvan
              </Link>
            </Box>
          </Grid>

          <Box mb={"10px"} mt={"15px"} fontWeight={500} fontSize={"2xl"}>
            International flights
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={0}>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Maldives
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Singapore
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to London
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Fizi
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Surrey
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Pattaya
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to New York
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Toronto
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Boracay Island
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Flights to Hawaii Island
              </Link>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
