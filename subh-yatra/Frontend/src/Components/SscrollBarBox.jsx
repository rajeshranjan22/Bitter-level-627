import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ScrollBarBox = () => {
  return (
    <Box
      borderRadius="8px"
      border="0.3px solid gray"
      p="10px"
      w={{ sm: "90%", md: "90%", lg: "75%" }}
      m={["50px 10px", "50px auto", "50px auto", "50px auto"]}
    >
      <Box w="100%">
        <Box p="1rem 1rem 0px 1rem" borderBottom="1px solid gray">
          <Text
            fontWeight="bold"
            cursor="pointer"
            pb="10px"
            display="inline-block"
            borderBottom="2px solid #3660d8"
            color="#3662d8"
          >
            Be inspired and discover more with Expedia
          </Text>
        </Box>
      </Box>

      <Box minH="200px" maxH="200px" overflowY="scroll">
        <Box m="1rem 15px">
          <Text fontSize="1.3rem" fontWeight="bold">
            Hotel deals on top domestic destinations
          </Text>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Las Vegas hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              New York hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Orlando hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Miami hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Las Angeles hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Chicago hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Nashville hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Myrtle Beach hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              New Orleans hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Key West hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              San Francisco hotels
            </Text>
          </Flex>
        </Box>

        <Box m="1rem 15px">
          <Text fontSize="1.3rem" fontWeight="bold">
            Book hotels internationally
          </Text>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Cabo San Lucas hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              London hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Paris hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Barcelona hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Cancun hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Dubai hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Tokyo hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              San Juan hotels
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Los Cabos hotels
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Riviera Maya hotels
            </Text>
          </Flex>
        </Box>

        <Box m="1rem 15px">
          <Text fontSize="1.3rem" fontWeight="bold">
            Top Domestic Flights
          </Text>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Las Vegas
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Hawaii
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to New York
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Orlando
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Miami
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Los Angeles
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Maui
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Houston
            </Text>
          </Flex>

          <Flex
            direction={["column", "column", "row", "row"]}
            w={{ sm: "90%", md: "85%", lg: "60%" }}
            ml="10px"
            justify="space-between"
            align="center"
          >
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Dallas
            </Text>
            <Text
              fontSize="14px"
              color="#3660d8"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Flights to Denver
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollBarBox;
