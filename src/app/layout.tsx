import React from 'react';
import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Button,
    Input, useDisclosure
} from '@chakra-ui/react';


import {Providers} from "@/app/providers";
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon} from "@chakra-ui/icons";


interface RootLayoutProps {
    children: React.ReactNode;
}


// Assuming metadata is used elsewhere and correctly
export const metadata = {
    title: 'arctic-hub',
    description: 'Home Media Server',
};
export default function RootLayout({children}: RootLayoutProps) {

    return (

            <Providers>
                {/*<Flex p={2} minW={'99vw'} maxH={'96vh'} justifyContent={'center'} alignContent={'center'} >*/}
                {/*    <Flex justifyContent={'center'} alignContent={'center'} w={'99%'} p={2} bg={'white'} mt={'0.7%'}*/}
                {/*          rounded={'25px'} maxH={'97.4vh'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>*/}
                <Flex justifyContent={'center'} alignContent={'center'} bg={'gray.100'} w={'100%'}
                      boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                    {children}
                </Flex>
                {/*</Flex>*/}
                {/*</Flex>*/}
            </Providers>

    );
}
