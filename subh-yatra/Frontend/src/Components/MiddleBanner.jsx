import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import MiddleBanner1 from "../Assets/HomePage_Images/MiddleBanner-1.webp";
import MiddleBanner2 from "../Assets/HomePage_Images/MiddleBanner-2.webp";
import MiddleBanner3 from "../Assets/HomePage_Images/MiddleBanner-3.webp";
import MiddleBanner4 from "../Assets/HomePage_Images/MiddleBanner-4.webp";
import MiddleBanner5 from "../Assets/HomePage_Images/MiddleBanner-5.webp";
import MiddleAdd from "../Assets/HomePage_Images/MiddleAdd.jfif";
import { Link } from "react-router-dom";

const MiddleBanner = () => {
  return (
    <Box
      w={{ sm: "90%", md: "90%", lg: "80%" }}
      m={["50px 10px", "50px auto", "50px auto", "50px auto"]}
    >
      <SimpleGrid spacing={6} mt="1rem" columns={{ sm: "1", md: "2", lg: "3" }}>
        <Box cursor="pointer">
          <Link to="/nav_hotel">
            <Box>
              <Image borderRadius="8px" src={MiddleBanner1} />
            </Box>
            <Box mt="0.5rem">
              <Text fontSize="12px">SUMMER IS A BUZZ IN THE CITY</Text>
              <Text fontSize="1.1rem" fontWeight="500">
                Plan a city getaway with member-only deals on select hotels
              </Text>
            </Box>
          </Link>
        </Box>

        <Box cursor="pointer">
          <Link to="/nav_car">
            <Box>
              <Image borderRadius="8px" src={MiddleBanner2} />
            </Box>
            <Box mt="0.5rem">
              <Text fontSize="12px">GET MORE TO GO MORE</Text>
              <Text fontSize="1.1rem" fontWeight="500">
                Members can double dip with points on top of airline miles
              </Text>
            </Box>
          </Link>
        </Box>

        <Box cursor="pointer">
          <Link to="/nav_flights">
            <Box>
              <Image borderRadius="8px" src={MiddleBanner3} />
            </Box>
            <Box mt="0.5rem">
              <Text fontSize="12px">YOUR WEEKEND JUST GO BETTER</Text>
              <Text fontSize="1.1rem" fontWeight="500">
                Save on these last-minute weekend getaways.
              </Text>
            </Box>
          </Link>
        </Box>
      </SimpleGrid>

      <SimpleGrid mt="25px" spacing={7} columns={{ sm: "1", md: "2" }}>
        <Box cursor="pointer">
          <Link to="/nav_hotel">
            <Box>
              <Image borderRadius="8px" src={MiddleBanner4} />
            </Box>
            <Box mt="0.5rem">
              <Text fontSize="12px">BROADEN YOUR HORIZONS</Text>
              <Text fontSize="1.1rem" fontWeight="500">
                There's a whole lot of world out there—go see more of it
              </Text>
            </Box>
          </Link>
        </Box>

        <Box cursor="pointer">
          <Link to="/nav_flights">
            <Box>
              <Image borderRadius="8px" src={MiddleBanner5} />
            </Box>
            <Box mt="0.5rem">
              <Text fontSize="12px">YOUR BEACH BLISS AWAITS</Text>
              <Text fontSize="1.1rem" fontWeight="500">
                Experience ultimate relaxation with a coastal getaway
              </Text>
            </Box>
          </Link>
        </Box>
      </SimpleGrid>

      <Box
        m="50px auto"
        cursor="pointer"
        w={{ sm: "90%", md: "70%", lg: "65%" }}
      >
        <Image w="100%" src={MiddleAdd} />
      </Box>
    </Box>
  );
};

export default MiddleBanner;
