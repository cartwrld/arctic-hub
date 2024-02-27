import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Center, Flex, Heading, HStack, Tag, TagLabel, TagLeftIcon} from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import {FaPlus} from "react-icons/fa6";
import AppButton from "@/components/AppButton"
import ArcticBanner from "@/components/ArcticBanner";


export default function Home() {


    return (
        <Flex w={'100%'} h={'100%'} rounded={6} bg={'gray.200'}>
            <Flex flexDir={'column'} w={'100%'}>
                <ArcticBanner/>
                <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.300'} flexDir={'column'} py={5} mb={10}>
                    <Flex w={'80%'}>
                        <SearchBar/>
                    </Flex>
                </Flex>
                <Flex justifyContent={'center'}  my={5} mb={10} flexWrap={'wrap'} h={'100%'}>
                    <AppButton appName={'music'} key={'music'} link={'arcticlab'}/>
                    <AppButton appName={'movies'} key={'movies'} link={'arcticlab'}/>
                    <AppButton appName={'tvshows'} key={'tvshows'} link={'arcticlab'}/>
                    <AppButton appName={'arcticlab'} key={'arcticlab'} link={'arcticlab'}/>
                </Flex>
            </Flex>
        </Flex>
    );
}
