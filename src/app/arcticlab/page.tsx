import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Flex} from "@chakra-ui/react"; // ensure this path is correct

export default function ArcLab() {

    return (
        <Flex w={'100%'} h={"100%"} justifyContent={'center'} alignItems={'center'}>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>arctic_lab</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>torrents</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>undownloaded</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>oldwhite</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ArcticLab/>
        </Flex>
    );
}

