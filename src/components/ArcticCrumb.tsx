import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react';
import { FaAngleRight } from "react-icons/fa6";


const FancyBreadcrumb = (props: { items : {text: string, href: string, isCurrentPage: boolean}[] }) => {
  const {items} = props

  return (
    <Breadcrumb
      spacing="8px"
      separator={<FaAngleRight color="gray.500" />}
      // Customize the breadcrumb container as needed
      padding="8px"
      backgroundColor="purple.50"
      borderRadius="lg"
      boxShadow="md"
    >
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={item.isCurrentPage}>
          <BreadcrumbLink
            href={item.href}
            color={item.isCurrentPage ? "purple.500" : "gray.600"}
            _hover={{ textDecoration: "none", color: "purple.600" }}
            // Add more styles or props as needed
          >
            {item.text}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default FancyBreadcrumb;
