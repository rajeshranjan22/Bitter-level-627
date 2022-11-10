import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function SsimpleImageBox() {
  return (
    <Box>
      <Box w={"70%"} margin={"auto"} h={"120px"} mb={"50px"} cursor={"pointer"}>
        <Image
          w={"100%"}
          h={"100%"}
          src="https://tpc.googlesyndication.com/simgad/12535850531646588924?"
        />
      </Box>
    </Box>
  );
}
