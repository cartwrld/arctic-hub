import Image from "next/image";
import styles from "../page.module.css";
import {Flex, Heading} from "@chakra-ui/react";

export default function Movies() {
    return (
        <main className={styles.main}>
            <Flex bg={'lightblue'} p={10} rounded={15} justifyContent={'center'} alignItems={'center'}>
                <Heading>This is a React / Next.js / ChakraUI project, hosted by Apache 2</Heading>
            </Flex>
        </main>
    )
}

