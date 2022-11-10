import { Box } from "@chakra-ui/react";
import MiddleBanner from "../Components/MiddleBanner";
import MiddleCards from "../Components/MiddleCards";
import Navbar from "../Components/Navbar";
import ScrollBarBox from "../Components/SscrollBarBox";
import TopBanner from "../Components/TopBanner";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <TopBanner />
      <MiddleCards />
      <MiddleBanner />
      <ScrollBarBox />
    </Box>
  );
};

export default HomePage;
