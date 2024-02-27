import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Center, Flex, Heading, HStack, Tag, TagLabel, TagLeftIcon} from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
// import {SmallAddIcon} from "@chakra-ui/icons";
import {FaPlus} from "react-icons/fa6";
import AppButton from "@/components/AppButton"
import ArcticBanner from "@/components/ArcticBanner";


export default function Home() {

    const apps = ['music', 'movies', 'tvshows', 'photos']


    return (

        <Flex w={'100%'} h={'100%'} rounded={6} bg={'gray.200'}>
            <Flex flexDir={'column'} w={'100%'}>
                <ArcticBanner/>

                <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.300'} flexDir={'column'} py={5}>
                    <Flex w={'80%'}>
                        <SearchBar/>
                    </Flex>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} my={5} mb={10} flexWrap={'wrap'} h={'100%'}>
                    <AppButton appName={'music'} key={'music'}/>
                    <AppButton appName={'movies'} key={'movies'}/>
                    <AppButton appName={'tvshows'} key={'tvshows'}/>
                    <AppButton appName={'arcticlab'} key={'arcticlab'}/>
                </Flex>
            </Flex>
        </Flex>

    );
}
