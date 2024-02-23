import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Center, Flex, Heading, HStack, Tag, TagLabel, TagLeftIcon} from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
// import {SmallAddIcon} from "@chakra-ui/icons";
import {FaPlus} from "react-icons/fa6";


export default function Home() {

    const apps = ['music', 'movies', 'tvshows', 'photos']
    return (
        // <main className={styles.main}>
        <Flex  w={'100%'} h={"100%"} rounded={6} bg={'gray.200'}>
            <Flex flexDir={'column'} w={'100%'}>
                <Center py={10}><Heading fontSize={'3em'} m={5}>Arctic-Hub</Heading></Center>
                <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.300'} flexDir={'column'} pt={5}>
                    <Tagger apps={apps}/>
                    <SearchBar w={80}/>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} my={5} mb={10} flexWrap={'wrap'}>
                    <ArcticApp appName={'music'} key={'music'}/>
                    <ArcticApp appName={'tvshows'} key={'tvshows'}/>
                    <ArcticApp appName={'movies'} key={'movies'}/>
                    <ArcticApp appName={'movies'} key={'movies'}/>
                    <ArcticApp appName={'movies'} key={'movies'}/>
                    <ArcticApp appName={'tvshows'} key={'tvshows'}/>
                    <ArcticApp appName={'tvshows'} key={'tvshows'}/>
                    <ArcticApp appName={'music'} key={'music'}/>
                    <ArcticApp appName={'tvshows'} key={'tvshows'}/>
                    <ArcticApp appName={'music'} key={'music'}/>
                    <ArcticApp appName={'movies'} key={'movies'}/>
                    <ArcticApp appName={'music'} key={'music'}/>
                </Flex>
            </Flex>
        </Flex>
        // </main>
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

const handleAppName = (name: string) => {
    let retName = ''
    switch (name) {
        case 'tvshows' :
            retName = 'TV Shows';
            break;
        default:
            retName = name.charAt(0).toUpperCase() + name.substring(1)
    }
    return retName
}

function ArcticApp(props: { appName: string }) {

    const {appName} = props


    return (
        <Button w={'fit-content'} h={'fit-content'} m={0} rounded={9} minW={112} bg={'none'}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} p={5} pb={3}
                      fontWeight={'semibold'}>
                    <Image src={`/images/${appName}.png`} alt={'music'} width={50} height={50}/>
                </Flex>

                <Flex justifyContent={'center'} alignItems={'center'} p={0} m={0}>
                    <Heading fontWeight={'600'} p={0} m={0} lineHeight={0} mb={5}
                             fontSize={'regular'}>{handleAppName(appName)}</Heading>
                </Flex>
            </Flex>
        </Button>
    )
}