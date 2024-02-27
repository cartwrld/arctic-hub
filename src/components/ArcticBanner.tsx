import {Center, Flex, Heading} from "@chakra-ui/react";
import styles from "@/app/page.module.css";

export default function ArcticBanner() {
    return (
            <Center bg={'none'} className={styles.banner} w={'100%'} boxShadow={'sm'} zIndex={3}>
                <Center h={'100%'} w={'100%'} my={10}>
                    <Heading fontSize={'4rem'} m={5} color={"ghostwhite"} textShadow={'0 0 10px rgb(25, 55, 93, 0.5)'}>Arctic-Hub</Heading>
                </Center>
            </Center>
    )
}