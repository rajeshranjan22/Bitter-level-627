import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../SearchBar";
import RoomsCard from "./RoomsCard";

const RoomsSection = ({ singleProduct }) => {
  let images = [
    {
      src: "https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/w365h225x11y0-24f663ed.jpg?impolicy=resizecrop&rw=598&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/2e07dd03.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/d3433776.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/2e07dd03.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/388a675b.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
  ];

  return (
    <Box marginTop={"2rem"} marginBottom="2rem">
      <Text
        fontSize={"28px"}
        margin="0 0rem 1rem 0"
        fontWeight={"bold"}
        color="#141d38"
      >
        Choose Your Rooms
      </Text>
      <Box margin="0 0rem 1rem 0">
        <SearchBar />
      </Box>

      <Box display={"flex"} gap={"1%"}>
        {singleProduct?.rooms.map((e) => (
          <RoomsCard
            images={singleProduct.images || images}
            roomes={e}
            singleProduct={singleProduct}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RoomsSection;
