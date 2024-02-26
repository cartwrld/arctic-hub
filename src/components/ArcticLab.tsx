'use client'

import React, {useState, useEffect} from 'react';
import styles from "../app/page.module.css"; // ensure this path is correct
import {Box, Center, Flex, Heading, Text, VStack} from "@chakra-ui/react"; // ensure this path is correct

interface FileDetail {
    name: string;
    ext: string;
    fullpath: string;
}

interface DirDetail {
    name: string;
    fullpath: string;
    children: any[]; // Adjusted for compatibility
}

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
        return Object.keys(fileTree).map((k) =>
            <Flex justifyContent={'center'} alignItems={'center'} w={150} h={150} p={4} m={4} bg={'red'} key={k}>
                {k}
            </Flex>
        )

    }


    return (
        <main className={styles.main}>
            <Flex direction="column" p={5}>
                <Heading mb={5}>This is the lab</Heading>
                {
                    Object.keys(fileTree).length > 0
                        ? handleTree()
                        : (<Center>No files found.</Center>)
                }
            </Flex>
        </main>
    )
}




