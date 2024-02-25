'use client'

import React, { useState, useEffect } from 'react';
import styles from "../app/page.module.css"; // ensure this path is correct

export default function ArcticLab() {
    const [fileTree, setFileTree] = useState({});

    useEffect( () => {
        // Fetch the file list from the API
        const fetchData = async () => {
            try {
                const response = await fetch('../pages/api/files');
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
    }, []);

    return (
        <main className={styles.main}>
            <h1>This is the lab</h1>
            <pre>{JSON.stringify(fileTree, null, 2)}</pre>
        </main>
    );
}
