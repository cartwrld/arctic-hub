import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Flex} from "@chakra-ui/react"; // ensure this path is correct

export default function ArcLab() {

    return (
        <Flex w={'100%'} h={"100%"} justifyContent={'center'} alignItems={'center'}>
            <Breadcrumb>
                <BreadcrumbItem>root</BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>torrents</BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>undownloaded</BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>basedir</BreadcrumbItem>
            </Breadcrumb>
            <ArcticLab/>
        </Flex>
    );
}

