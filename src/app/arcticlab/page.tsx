import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Flex} from "@chakra-ui/react";
import ArcticBanner from "@/components/ArcticBanner";
import ArcticCrumb from "@/components/ArcticCrumb"; // ensure this path is correct

export default function ArcLab() {
    const bcItems = [
        { text: "Home", href: "/", isCurrentPage: false },
        { text: "Category", href: "/category", isCurrentPage: false },
        { text: "Subcategory", href: "/category/subcategory", isCurrentPage: true }
    ];

    return (
        <Flex w={'100%'} h={"100%"} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDir={'column'} w={'100%'}>
                <ArcticBanner/>
                <Box>
                    <ArcticCrumb items={bcItems}/>
                    {/*<Breadcrumb>*/}
                    {/*    <BreadcrumbItem isCurrentPage>*/}
                    {/*        <BreadcrumbLink href='#'>arctic_lab</BreadcrumbLink>*/}
                    {/*    </BreadcrumbItem>*/}
                    {/*</Breadcrumb>*/}
                </Box>
                <ArcticLab/>
            </Flex>
        </Flex>
    );
}

