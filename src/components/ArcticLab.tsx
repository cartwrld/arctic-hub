'use client'

import React, { useState, useEffect } from 'react';
import styles from "../app/page.module.css";
import {Box, Heading} from "@chakra-ui/react"; // ensure this path is correct

export default function ArcticLab() {
    const [fileTree, setFileTree] = useState({});

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
            } catch (error) {
                console.error("Failed to fetch files", error);
            }
        };

        fetchData();
    }, []); //

    function parseFileTree(ft : object) {
        console.log(ft)
        return (<Box>{ft.toString()}</Box>)
    }

    return (
        <main className={styles.main}>
            <h1>This is the lab</h1>
            {/* Render the file tree or a message if it's empty */}
            {Object.keys(fileTree).length ?
                (
                    parseFileTree(fileTree)
            ) : (
                <p>No files to display.</p>
            )
            }
        </main>
    );
}
