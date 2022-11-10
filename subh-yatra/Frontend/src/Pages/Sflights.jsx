import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HomeSearchBar from "../Components/HomeSearchBar";
import Navbar from "../Components/Navbar";
import SbarCode from "../Components/SbarcodeComponent";
import SflexibleHd from "../Components/SflexibleHd";
import SscrollBoxOption from "../Components/SscrollBoxOption";
import SsimpleImageBox from "../Components/SsimpleImageBox";

export default function Sflights() {
  return (
    <Box>
      <Navbar />
      <Box w="84%" m="auto" mt="14" mb="6">
        <HomeSearchBar />
      </Box>
      <Box mt={"50px"}></Box>
      <SflexibleHd image={"https://i.postimg.cc/K856Dnsg/H-Number-4.png"} />
      <Box mt={"150px"}></Box>
      <SsimpleImageBox />
      <SbarCode />
      <SscrollBoxOption />
      <Footer />
    </Box>
  );
}
