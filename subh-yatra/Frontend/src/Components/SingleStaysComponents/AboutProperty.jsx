import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AboutProperty = ({ singleProduct }) => {
  return (
    <Box margin="2rem 0" display={"flex"}>
      <Box width="40%" padding={"1rem"}>
        <Text fontSize={"22px"} fontWeight="500">
          About this Property
        </Text>
      </Box>
      <Box width={"60%"} padding={"1rem"}>
        <Box>
          <Text fontSize={"20px"} marginBottom="0.5rem">
            {singleProduct.title || "The Westin Mumbai Garden City"}
          </Text>
          <Text fontSize={"14px"} marginBottom="0.5rem">
            {singleProduct.aboutProperty.subTitle ||
              "5-star luxury hotel in the heart of Mundhwa"}{" "}
          </Text>
          <Text fontSize={"14px"} textAlign="justify" marginBottom={"1rem"}>
            {singleProduct.aboutProperty.desc ||
              " Located in Goregaon neighborhood, The Westin Mumbai Garden City is connected to a shopping center. Traveling with kids? Don't miss Film City.Located in Goregaon neighborhood, The Westin Mumbai Garden City is connected to a shopping center. Traveling with kids? Don't miss Film City."}
          </Text>
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight="500">
            Languages
          </Text>
          <Text fontSize={"14px"}>English, Hindi</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutProperty;
