import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import HomeSearch from "./HomeSearch";

const HomeSearchBar = () => {
  return (
    <div className="border border-solid border-banner rounded-md">
      <Tabs mt="10px">
        <TabList className="overflow-hidden">
          <Tab>Stays</Tab>
          <Tab>Flights</Tab>
          <Tab>Cars</Tab>
          <Tab>Packages</Tab>
          <Tab>Things to do</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {" "}
            <HomeSearch />
          </TabPanel>
          <TabPanel>
            {" "}
            <HomeSearch />
          </TabPanel>
          <TabPanel>
            {" "}
            <HomeSearch />
          </TabPanel>
          <TabPanel>
            {" "}
            <HomeSearch />
          </TabPanel>
          <TabPanel>
            {" "}
            <HomeSearch />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default HomeSearchBar;
