import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function SsimpleImageBox2() {
  return (
    <Box>
      <Box
        w={"85%"}
        margin={"auto"}
        h={"320px"}
        borderRadius={"10px"}
        mb={"50px"}
        cursor={"pointer"}
        boxShadow="base"
      >
        <Image
          borderRadius={"10px"}
          w={"100%"}
          h={"100%"}
          src="https://i.postimg.cc/28hBsV5d/Whats-App-Image-2022-08-27-at-6-56-41-PM.jpg"
        />
      </Box>
    </Box>
  );
}
