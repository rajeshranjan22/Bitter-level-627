import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import appBanner from "../Assets/HomePage_Images/Top-app-banner.webp";
import QR from "../Assets/HomePage_Images/QR.webp";
import SummerBanner from "../Assets/HomePage_Images/Summer-banner.jpg";
import { useNavigate } from "react-router-dom";
import HomeSearchBar from "./HomeSearchBar";

const TopBanner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/nav_hotel", { replace: true });
  };

  return (
    <Stack
      w={{ sm: "90%", md: "90%", lg: "80%" }}
      m={["50px 10px", "50px auto", "50px auto", "50px auto"]}
      gap="2.5rem"
    >
      <HomeSearchBar />
      {/* Download app banner */}
      <Flex
        direction={["column", "column", "column", "row"]}
        w="100%"
        borderRadius="8px"
        border="0.2px solid gray"
      >
        <Box w={["100%", "100%", "100%", "35%"]}>
          <Image
            h="100%"
            w="100%"
            borderTopLeftRadius="8px"
            borderTopRightRadius={["8px", "8px", "8px"]}
            borderBottomLeftRadius={["", "", "", "8px"]}
            src={appBanner}
          />
        </Box>

        <Flex
          direction={["column", "column", "row"]}
          w={["100%", "100%", "100%", "75%"]}
          p="24px"
          justify="space-between"
          gap="1rem"
        >
          <Box w={["100%", "100%", "100%", "75%"]}>
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
              By providing your number, you agree to receive a one-time
              automated text message with a link to get the app. Standard text
              message rates may apply.
            </Text>
          </Box>

          {/* QR code box */}
          <Box w={["30%", "35%", "35%", "29%"]} m={["auto", "auto", "auto"]}>
            <Image w="100%" h={["60%", "65%", "70%", "75%"]} src={QR} />
            <Text textAlign="center"> Scan the QR code</Text>
          </Box>
        </Flex>
      </Flex>

      {/* Summer offer banner */}
      <Box w="100%" position="relative">
        <Image borderRadius="10px" w="100%" src={SummerBanner} />
        <Box
          w={["90%", "90%", "50%", "35%"]}
          position="absolute"
          top={["14px", "25px", "35px", "50px"]}
          left={["10px", "15px", "25px", "35px"]}
        >
          <Heading fontSize={["1xl", "1xl", "1.5rem", "2rem"]} color="white">
            Members get last minute summer savings
          </Heading>
          <Text
            display={["none", "block", "block", "block"]}
            m={["10px 0px", "10px 0px", "1rem 0px"]}
            color="white"
          >
            Plan a last-minute summer getaway with Member Prices of 10% off or
            more on select hotels.
          </Text>
          <Button
            onClick={handleClick}
            size={["xs", "sm", "md", "md", "md"]}
            mt={["1rem", "0px"]}
            mb={{ xs: "5px", sm: "5px" }}
            bg="#3662d8"
            _hover="none"
            color="white"
          >
            See members details
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default TopBanner;
