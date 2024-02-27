import styles from "../page.module.css";
import ArcticLab from "@/components/ArcticLab";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Flex} from "@chakra-ui/react"; // ensure this path is correct

export default function ArcLab() {

    return (
        <Flex w={'100%'} h={"100%"} justifyContent={'center'} alignItems={'center'}>
            <Breadcrumb>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>arctic_lab</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ArcticLab/>
        </Flex>
    );
}

