import { Box } from "@chakra-ui/react";
import MiddleBanner from "../Components/MiddleBanner";
import MiddleCards from "../Components/MiddleCards";
import Navbar from "../Components/Navbar";
// import ScrollBarBox from "../Components/SscrollBarBox";
import TopBanner from "../Components/TopBanner";
import Footer from "../Components/Footer"

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <TopBanner />
      <MiddleCards />
      <MiddleBanner />
      {/* <ScrollBarBox /> */}
      <Footer/>
    </Box>
  );
};

export default HomePage;
