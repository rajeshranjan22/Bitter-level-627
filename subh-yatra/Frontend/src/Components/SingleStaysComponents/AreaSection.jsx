import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import Map from "../Map";

const AreaSection = ({ singleProduct }) => {
  return (
    <Box display={"flex"}>
      <Box width="40%" padding={"1rem"}>
        <Text fontSize={"22px"} fontWeight="500">
          About this area
        </Text>
        <Text fontSize={"20px"} margin="2rem 0 1rem 0" fontWeight="500">
          {singleProduct.aboutArea.place}
        </Text>
        <Text fontSize={"14px"}>{singleProduct.aboutArea.desc}</Text>
        <Text
          display={"flex"}
          cursor="pointer"
          width={"170px"}
          alignItems={"center"}
          justifyContent="space-between"
          color="blue"
          marginTop={"1rem"}
        >
          <Link to="">
            <h3 className="text-sm text-blue mt-0 hover:underline">
              Visit our city travel guide
            </h3>
          </Link>
          <Text color={"blue"}>
            {<BiLinkExternal color={"blue"} fill="blue" />}
          </Text>
        </Text>
      </Box>
      <Box width={"60%"} padding="1rem">
        <Map width="580px" height="250px" city={singleProduct.map} />
      </Box>
    </Box>
  );
};

export default AreaSection;
