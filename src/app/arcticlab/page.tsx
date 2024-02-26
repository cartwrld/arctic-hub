
import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Flex} from "@chakra-ui/react"; // ensure this path is correct

export default function ArcLab() {

    return (
        <main className={styles.main}>
           <Flex w={'100vw'} justifyContent={'center'} alignItems={'center'}>
               <ArcticLab/>
           </Flex>
        </main>
    );
}

