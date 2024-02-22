import Image from "next/image";
import styles from "./page.module.css";
import {Box, Flex, Heading} from "@chakra-ui/react";

export default function Home() {
    return (
        <main className={styles.main}>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
                    <Heading fontSize={'2em'}>Arctic-Hub</Heading>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <ArcticApp appName={'music'} key={'music'}/>
                        <ArcticApp appName={'tvshows'} key={'tvshows'}/>
                        <ArcticApp appName={'movies'} key={'movies'}/>
                    </Flex>
                </Flex>
            </Flex>
        </main>
    );
}

function ArcticApp(props: {appName: string}) {

    const {appName} = props
    const handleAppName = (name : string) => {
        let retName = ''
            switch (name) {
                case 'tvshows' : retName = 'TV Shows'; break;
                default: retName = name.charAt(0).toUpperCase() + name.substring(1)
            }
        return retName
    }

    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} p={5} fontWeight={'semibold'}>
                <Image src={`/images/${appName}.png`} alt={'music'} width={100} height={100}/>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} p={0} m={0}>
                <Heading fontWeight={'600'} p={0} m={0} lineHeight={0} fontSize={'regular'}>{handleAppName(appName)}</Heading>
            </Flex>
        </Flex>
    )
}