import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Flex} from "@chakra-ui/react";
import ArcticBanner from "@/components/ArcticBanner";
import ArcticCrumb from "@/components/ArcticCrumb"; // ensure this path is correct

export default function ArcLab() {
    const bcItems = [
        {text: "Home", href: "/", isCurrentPage: false},
        {text: "ArcticLab", href: "/arcticlab", isCurrentPage: true},

    ];


    return (
        <Flex flexDir={'column'} w={'100%'} bg={'purple.50'}>
            <ArcticBanner/>
            <ArcticCrumb items={bcItems}/>
            <ArcticLab/>
        </Flex>
    );
}

