import React from 'react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box} from '@chakra-ui/react';
import {FaAngleRight} from "react-icons/fa6";


export default function ArcticCrumb(props: { items: { text: string, href: string, isCurrentPage: boolean }[] }) {
    const {items} = props

    return (
        <Breadcrumb
            separator={<FaAngleRight color='gray.500'/>} spacing={'8px'} padding={'8px'} backgroundColor={'purple.50'}
            borderRadius={'lg'} boxShadow={'md'} m={3}>
            {
                items.map((item, index) => (
                    <BreadcrumbItem key={index} isCurrentPage={item.isCurrentPage}>
                        <BreadcrumbLink href={item.href}
                                        color={item.isCurrentPage ? 'purple.500' : 'gray.600'}
                                        _hover={{textDecoration: 'none', color: 'purple.600'}}>
                            {item.text}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    );
}

