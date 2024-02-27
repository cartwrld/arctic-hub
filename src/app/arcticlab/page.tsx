import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Flex} from "@chakra-ui/react";
import ArcticBanner from "@/components/ArcticBanner"; // ensure this path is correct

export default function ArcLab() {

    return (
        <Flex w={'100%'} h={"100%"} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDir={'column'} w={'100%'}>
                <ArcticBanner/>
                <Box>
                    <Breadcrumb>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>arctic_lab</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <ArcticLab/>
            </Flex>
        </Flex>
    );
}

