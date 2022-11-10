import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ExpediaGroupLogo from "../Assets/HomePage_Images/Expedia_group.svg";

const Footer = () => {
  return (
    <Box
      p="15px 0px"
      borderBottom="0.5px solid gray"
      w={{ sm: "90%", md: "90%", lg: "80%" }}
      m={["70px 15px", "70px auto 0px auto"]}
    >
      <Flex gap={7} direction={["column", "column", "column", "row"]}>
        <Box>
          <Image src={ExpediaGroupLogo} />
        </Box>

        <SimpleGrid spacing={5} columns={[2, 2, 2, 4]}>
          <Box>
            <Text fontWeight="bold">Company</Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              About
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Jobs
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              List your property
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Partnerships
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Newsroom
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Investor Relations
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Advertising
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold">Explore</Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              United States of America travel guide
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Hotels in United States of America
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Vacation rental in United States of America
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Vacation packages in United States of America
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Domestic Flight
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Car rental in United States of America
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              All accommodation types
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold">Policies</Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Privacy Policy
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Term of use
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Vrbo terms and conditions
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Expedia rewards terms
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Accessibility
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Do not sell my personal information
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold">Help</Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Support
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Cancel your hotel and vacational rental booking
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Cancel your flight
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Refund timeline, policies and processes
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Use an expedia coupon
            </Text>
            <Text
              m="7px 0px"
              fontSize="13px"
              color="#3660d8"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              International travel documents
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Footer;
