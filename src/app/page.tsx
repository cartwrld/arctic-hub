import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Center, Flex, Heading, HStack, Tag, TagLabel, TagLeftIcon} from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
// import {SmallAddIcon} from "@chakra-ui/icons";
import {FaPlus} from "react-icons/fa6";
import AppButton from "@/components/AppButton"


export default function Home() {

    const apps = ['music', 'movies', 'tvshows', 'photos']


    return (

        <Flex w={'100%'} h={"100%"} rounded={6} bg={'gray.200'}>
            <Flex flexDir={'column'} w={'100%'}>
                <Center bg={'none'} className={styles.banner} w={'100%'}>
                    <Center h={'100%'} w={'100%'} my={10}>
                        <Heading fontSize={'4rem'} m={5} color={"ghostwhite"} textShadow={'0 0 10px rgb(25, 55, 93, 0.5)'}>Arctic-Hub</Heading>
                    </Center>
                </Center>

                <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.300'} flexDir={'column'} py={5}>
                    {/*<Tagger apps={apps}/>*/}
                    <Flex w={'80%'}>
                        <SearchBar/>
                    </Flex>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} my={5} mb={10} flexWrap={'wrap'} h={'100%'}>
                    <AppButton appName={'music'} key={'music'}/>
                    <AppButton appName={'movies'} key={'movies'}/>
                    <AppButton appName={'tvshows'} key={'tvshows'}/>
                    <AppButton appName={'music'} key={'music1'}/>
                    <AppButton appName={'movies'} key={'movies1'}/>
                    <AppButton appName={'tvshows'} key={'tvshows1'}/>
                    <AppButton appName={'music'} key={'music2'}/>
                    <AppButton appName={'movies'} key={'movies2'}/>
                    <AppButton appName={'tvshows'} key={'tvshows2'}/>
                    <AppButton appName={'music'} key={'music3'}/>
                    <AppButton appName={'movies'} key={'movies3'}/>
                    <AppButton appName={'tvshows'} key={'tvshows3'}/>
                </Flex>
            </Flex>
        </Flex>

    );
}

function Tagger(data: { apps: string[] }) {
    const {apps} = data

    return (
        <HStack spacing={1}>
            {apps.map((app) => (
                <Tag size={'md'} key={app} variant='subtle' bg={'blue.200'}>
                    <FaPlus fontSize={'1em'}/>
                    <TagLabel pl={2}>{app}</TagLabel>
                </Tag>
            ))}
        </HStack>
    )
}


// function ArcticApp(props: { appName: string , onClick: any}) {
//
//     const {appName, onClick} = props
//
//
//
//     return (
//         <Button w={'fit-content'} h={'fit-content'} m={0} rounded={9} minW={112} bg={'none'} onClick={onClick}>
//             <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
//                 <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} p={5} pb={3}
//                       fontWeight={'semibold'}>
//                     <Image src={`/images/${appName}.png`} alt={'music'} width={50} height={50}/>
//                 </Flex>
//
//                 <Flex justifyContent={'center'} alignItems={'center'} p={0} m={0}>
//                     <Heading fontWeight={'600'} p={0} m={0} lineHeight={0} mb={5}
//                              fontSize={'regular'}>{handleAppName(appName)}</Heading>
//                 </Flex>
//             </Flex>
//         </Button>
//     )
// }