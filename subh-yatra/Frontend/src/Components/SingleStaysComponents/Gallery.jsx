import React from "react";
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
const Gallery = ({ singleProduct }) => {

  return (
    <Box >
      <Flex alignItems="center" lineHeight={"50px"} fontWeight="600" margin={"0 0.5rem"} cursor="pointer" className="text-sm font-semibold text-blue mt-1 hover:underline">
        <Icon as={BsArrowLeft}  color="#3662d8" fill={"#3662d8"} fontWeight="600"/>
            <Text color="#3662d8" margin={"0 0.5rem"}>See all Properties</Text>
          </Flex>
      <Grid
        h="300px"
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={0.5}
      >
        <GridItem rowSpan={2} colSpan={2} bg="gray">
          <Image
            src={
              singleProduct?.images[0].src
            }
            width={"100%"}
            height="100%"
            alt="Rooms"
          />
        </GridItem>
        <GridItem colSpan={1} bg="gray">
          {" "}
          <Image
            src={
              singleProduct?.images[1].src
            }
            width={"100%"}
            height="148px"
            alt="Rooms"
          />
        </GridItem>
        <GridItem colSpan={1} bg="gray">
          {" "}
          <Image
            src={
              singleProduct?.images[2].src
            }
            width={"100%"}
            height="148px"
            alt="Rooms"
          />
        </GridItem>
        <GridItem colSpan={1} bg="gray">
          {" "}
          <Image
            src={
              singleProduct?.images[3].src
            }
            width={"100%"}
            height="148px"
            alt="Rooms"
          />
        </GridItem>
        <GridItem colSpan={1} bg="gray">
          {" "}
          <Image
            src={
              singleProduct?.images[4].src
            }
            width={"100%"}
            height="148px"
            alt="Rooms"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Gallery;
