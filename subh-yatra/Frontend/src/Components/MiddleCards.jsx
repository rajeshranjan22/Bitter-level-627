import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";

const MiddleCards = () => {
  return (
    <Box
      w={{ sm: "90%", md: "90%", lg: "80%" }}
      m={["50px 10px", "50px auto", "50px auto", "50px auto"]}
    >
      <Heading>Here to help keep you on the move</Heading>

      <SimpleGrid spacing={3} mt="1rem" columns={{ sm: "1", md: "2", lg: "3" }}>
        <Box
          cursor="pointer"
          p="0.7rem"
          border="0.4px solid gray"
          borderRadius="6px"
        >
          <Flex justify="space-between" mb="0.4rem">
            <Text fontSize="1.2rem" fontWeight="bold">
              Change or cancel a trip
            </Text>
            <MdModeEditOutline />
          </Flex>
          <Text fontSize="10px">
            Make updates to your itinerary or cancel a booking
          </Text>
        </Box>

        <Box
          cursor="pointer"
          p="0.7rem"
          border="0.4px solid gray"
          borderRadius="6px"
        >
          <Flex justify="space-between" mb="0.4rem">
            <Text fontSize="1.2rem" fontWeight="bold">
              Use a credit or coupon
            </Text>
            <AiFillDollarCircle />
          </Flex>
          <Text fontSize="10px">
            Apply a coupon code or credit to a new trip
          </Text>
        </Box>

        <Box
          cursor="pointer"
          p="0.7rem"
          border="0.4px solid gray"
          borderRadius="6px"
        >
          <Flex justify="space-between" mb="0.4rem">
            <Text fontSize="1.2rem" fontWeight="bold">
              Track your refund
            </Text>
            <HiChatAlt2 />
          </Flex>
          <Text fontSize="10px">
            Check the status of a refund currently in progress
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default MiddleCards;
