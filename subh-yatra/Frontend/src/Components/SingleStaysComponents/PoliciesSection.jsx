import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PoliciesSection = ({ singleProduct }) => {
  return (
    <Box margin="2rem 0" display={"flex"}>
      <Box width="40%" padding={"1rem"}>
        <Text fontSize={"22px"} fontWeight="500">
          Policies
        </Text>
      </Box>
      <Box width={"60%"} padding={"1rem"}>
        <Box display={"flex"} justifyContent="space-between">
          <Box>
            <Text fontSize={"20px"} marginBottom="0.5rem">
              Check In
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkin.early}
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkin.express}
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkin.from}
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkin.minAge}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"20px"} marginBottom="0.5rem">
              Check Out
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkout.before}
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkout.early}
            </Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">
              {singleProduct.policies.Checkout.express}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text fontSize={"20px"} marginBottom="1rem">
            Property payment types
          </Text>
          <Text display={"flex"} marginBottom="2rem">
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" />
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" />
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PoliciesSection;
