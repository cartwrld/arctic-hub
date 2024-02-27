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
        <html>
        <body>
        <Providers>


            <Flex w={'100vw'} h={"100vh"} justifyContent={'center'} alignItems={'center'}>
                <Flex justifyContent={'center'} alignContent={'center'} bg={'gray.100'} w={'100vw'} h={'100%'}
                      boxShadow={'inset rgba(0, 0, 0, 0.15) 0px 2px 5px'}>
                    {children}
                </Flex>
            </Flex>


        </Providers>
        </body>
        </html>
    );
}
