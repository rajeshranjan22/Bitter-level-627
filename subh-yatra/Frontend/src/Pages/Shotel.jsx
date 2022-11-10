import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import SallDescription from "../Components/SallDescription";
import SbarcodeComponent from "../Components/SbarcodeComponent";
import SflexibleHd from "../Components/SflexibleHd";
import SsimpleImageBox from "../Components/SsimpleImageBox";
import SsimpleImageBox2 from "../Components/SsimpleImageBox2";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeSearchBar from "../Components/HomeSearchBar";

export default function Shotel() {
  return (
    <Box>
      <Navbar />
      <Box w="84%" m="auto" mt="14" mb="6">
           <HomeSearchBar />
      </Box>
      <Text mt={"15px"} mb={"15px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Ideas for your next trip
      </Text>
      <SflexibleHd image={"https://i.postimg.cc/htLwPS1b/H-number-2.png"} />
      <SsimpleImageBox />
      <Text mt={"15px"} mb={"15px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Explore, discover and save
      </Text>
      <SsimpleImageBox2 />
      <Box h={"10px"}></Box>
      <SbarcodeComponent />

      <Grid
        width={"85%"}
        margin={"auto"}
        templateColumns="repeat(2, 1fr)"
        gap={"20px"}
      >
        <SallDescription
          head={`Tips for Booking a Hotel `}
          body={`No holiday is complete without the right hotel. If you're looking to plan an unforgettable trip, you'll need to find the right place to stay. Learn how you can book the right hotel for your needs whether you're taking the family on holiday, travelling with someone special or just taking some time away for yourself.
        `}
        />
        <SallDescription
          head={`How can I find the cheapest hotels?`}
          body={`The cheapest hotels are easy to find if you know what factors you need to consider. The time of year you travel plays a big role, with cheap hotel rooms being more common during the off-season. Additionally, the star rating of the hotel and the kinds of amenities you opt for can all play a big part. Just keep in mind that these are all general trends rather than universal rules. Don't forget that you can sort your search results by price to put the cheapest options at the top of your results.

        `}
        />
        <SallDescription
          head={`How to book a hotel?`}
          body={`When you're looking to book a hotel, we've got you covered. With Expedia, all you have to do is input your travel dates and your destination, and we'll show you some of the best hotels available. You can add additional search filters to sort your results even further whether you're looking for a cheap hotel room or you want to splurge on something more luxurious. You'll find London hotels, Edinburgh hotels and Tenerife hotels among countless others across the world`}
        />
        <SallDescription
          head={`How can I find some of the best deals on hotels?`}
          body={`Hotel deals are easy to find when you use Expedia. All you have to do is implement the necessary search filters when trying to find a hotel for your next holiday. Filters are available for features like being fully refundable and having free cancellation. If you're an Expedia member, you can often find additional discounts that you wouldn't be able to enjoy otherwise. Of course, always remember to sort by price to see the cheapest suitable options that meet your criteria first on the results page.

        `}
        />
        <SallDescription
          head={`What are the most important things when choosing a hotel?`}
          body={`When you're choosing your hotel, it's important to consider what kind of holiday experience you're looking to enjoy. Family travellers will need to book something with plenty of room, while couples may not need something quite as large. Travelling with your partner, however, may make you more interested in amenities like hot tubs, so be sure to include the appropriate search filters based on the experience you're looking for. You'll find filters for a variety of features and amenities as well as for star ratings, reviews and proximity to certain attractions.`}
        />
        <SallDescription
          head={`Why should I book a hotel with Expedia?`}
          body={`Booking with Expedia makes planning a holiday easy. Not only will you be able to search a massive array of hotels with tools that make it easy to narrow down your options, but you can book a flight as well. You may even find additional discounts by booking your hotel and flight together. Additionally, you can become a member and enjoy extra hotel discounts you wouldn't be able to enjoy otherwise. Becoming a member is completely free, so there's no barrier to entry that comes with it.`}
        />
        <SallDescription
          head={`How far in advance should I book a hotel?`}
          body={`When booking a hotel, your best bet is to book a little in advance. If you book too far in advance, prices may be higher. Wait too long, however, and prices may also increase. Generally, the sweet spot is around 2 to 3 weeks before your holiday. Every destination is different, but you can start monitoring how prices change up to 40 days in advance. Keep in mind that booking at the last minute can be cheaper than you might think, thanks to hotels being desperate to get their last vacancies filled.`}
        />
        <SallDescription
          head={`Are hotels fully refundable on Expedia?`}
          body={`Some hotels on Expedia do offer flexible cancellation policies. You'll be able to see which ones do on your search results page because they'll be labelled as such in green text. Of course, you can always implement the 'fully refundable' search filter to only show results that offer this enticing feature.`}
        />
      </Grid>
      <Footer />
    </Box>
  );
}
// Explore, discover and save
