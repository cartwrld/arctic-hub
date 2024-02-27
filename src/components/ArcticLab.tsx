'use client'

import React, {useState, useEffect} from 'react';
import styles from "../app/page.module.css"; // ensure this path is correct
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody, Td,
    Text,
    Thead,
    Tr,
    VStack
} from "@chakra-ui/react";
import Link from "next/link"; // ensure this path is correct


export default function ArcticLab() {
    const [fileTree, setFileTree] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        // Fetch the file list from the API
        const fetchData = async () => {
            try {
                const response = await fetch('/api/files'); // Use the correct API endpoint
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setFileTree(data);
                console.log(data)
            } catch (error) {
                console.error("Failed to fetch files", error);
            }
        };

        fetchData();
    }, []);

    function handleTree() {
        return Object.keys(fileTree).map((k) => {
            const pattern = /.*\.\w+$/; // This is the regex for a string ending with ".*"
            let color = pattern.test(k) ? '#28a5ff' : '#0186ff'

            return (<FSItem key={k} item={k} color={color}/>)
        })
    }


    return (

        <Flex direction="column" p={5}>
            <Flex flexDir={'column'}>
                <TableContainer>
                <Table variant={'simple'}>
                    <Tbody>
                        {
                            Object.keys(fileTree).length > 0 ? handleTree() : (<Tr><Td>No files found.</Td></Tr>)
                        }
                    </Tbody>
                </Table>
            </TableContainer>

            </Flex>
         </Flex>
    )

}


function FSItem(props: { item: string, color: string }) {

    const {item, color} = props

    return (
        // <Link href={'arcticlab'}>

        <Tr>
            <Td>{item}</Td>
        </Tr>

        // </Link>
        // <Button bg={color} key={item} textAlign={'start'}>
        //     <Flex w={'100%'} textAlign={'start'} color={'gray.100'} maxW={200} h={30} p={4} m={4}>
        //
        //     </Flex>
        // </Button>
    )
}


