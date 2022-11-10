import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import appBanner from "../Assets/HomePage_Images/Top-app-banner.webp";
import QR from "../Assets/HomePage_Images/QR.webp";

export default function SbarcodeComponent() {
  return (
    <Flex
      w={{ sm: "95%", md: "80%", lg: "84%" }}
      m="50px auto"
      gap="2.5rem"
      borderRadius="8px"
      border="0.2px solid gray"
    >
      <Box w="35%">
        <Image
          h="100%"
          w="100%"
          borderTopLeftRadius="8px"
          borderBottomLeftRadius="8px"
          src={appBanner}
        />
      </Box>

      <Flex w="70%" p="24px" justify="space-between" gap="1rem">
        <Box w="75%">
          <Heading>Our app takes you further</Heading>
          <Text fontSize="sm" mt="0.5rem">
            When you book on the app you can save up to 25% on select hotels
            while earning double the points with every booking. With these app
            deals you'll save even more on trips, and that means you can take
            more trips, and manage it all on the go.
          </Text>

          <Heading fontSize="lg" mt="1.5rem">
            Text yourself a download link for easy access
          </Heading>
          <Flex align="center" gap="0.8rem">
            <Select
              borderColor="gray"
              mt="1rem"
              w="150px"
              placeholder="Country code"
            >
              <option value="india +91"> India </option>
              <option value="usa +1"> USA +1 </option>
              <option value="germany +49"> Germany +49 </option>
              <option value="ireland +353"> Ireland +353 </option>
              <option value="hong kong SAR +852"> Hong Kong SAR +852 </option>
              <option value="italy +39"> Italy +39 </option>
              <option value="japan +81"> Japan +81 </option>
              <option value="mexico +52"> Mexico +52 </option>
              <option value="netherland +31"> Netherland +31 </option>
              <option value="newzealand +64"> Newzealand +64 </option>
            </Select>

            <Input
              borderColor="gray"
              mt="1rem"
              w="150px"
              type="text"
              placeholder="Phone number"
            />
            <Button
              borderColor="gray"
              _hover="none"
              mt="1rem"
              w="150px"
              bg="#3662d8"
              color="white"
            >
              {" "}
              Get the app
            </Button>
          </Flex>

          <Text fontSize="xs" mt="0.5rem">
            By providing your number, you agree to receive a one-time automated
            text message with a link to get the app. Standard text message rates
            may apply.
          </Text>
        </Box>

        {/* QR code box */}
        <Box w="29%">
          <Image w="100%" h="80%" src={QR} />
          <Text textAlign="center"> Scan the QR code</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
