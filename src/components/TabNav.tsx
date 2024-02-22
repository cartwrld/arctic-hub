'use client'

import {Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import React from "react";

interface TabNavProps {
    onTabChange: (index: number) => void;
}

// export const TabNav: React.FC<TabNavProps> = ({ onTabChange }) => {
//     return (
        // <Tabs isFitted onChange={(index) => onTabChange(index)}>
        //     <TabList mb="1em">
        //         <Tab>Browse</Tab>
        //         <Tab>Movies</Tab>
        //         <Tab>TV Shows</Tab>
        //         <Tab>Search</Tab>
        //     </TabList>
        //     <TabPanels>
        //         <TabPanel>
        //             <Box>
        //                 <Flex bg={'lightblue'} p={10} rounded={15} justifyContent={'center'} alignItems={'center'}>
        //                 <Heading fontSize={'16px'}>This is a React / Next.js / ChakraUI project, hosted by Apache
        //                     2</Heading>
        //             </Flex>
        //             </Box>
        //         </TabPanel>
        //         <TabPanel>
        //             <Box>MOVIES</Box>
        //         </TabPanel>
        //         <TabPanel>
        //             <Box>TVSHOWS</Box>
        //         </TabPanel>
        //         <TabPanel>
        //             <Box>SEARCH</Box>
        //         </TabPanel>
        //     </TabPanels>
        // </Tabs>
    // )
// }
