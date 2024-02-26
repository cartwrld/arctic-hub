'use client'

import React, { useState, useEffect } from 'react';
import styles from "../app/page.module.css"; // ensure this path is correct
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"; // ensure this path is correct

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



    return (
        <main className={styles.main}>
            <Flex direction="column" p={5}>
                <Heading mb={5}>This is the lab</Heading>
                {/*{Object.keys(fileTree).length > 0 && renderFileTree(parseFileTree(fileTree))}*/}
            </Flex>
        </main>
    );
}


