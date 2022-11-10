import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SscrollBarForCar() {
  return (
    <Box>
      <Box
        border={"1px solid black"}
        width={"85%"}
        h={"300px"}
        margin={"auto"}
        borderRadius={"10px"}
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
            Other types of car hire
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={0}>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                One-way car hire
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Long-Term Car Hire
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Short-term car hire
              </Link>
            </Box>
            <Box>
              <Link style={{ color: "blue" }} to={""}>
                Search airport transportation
              </Link>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
