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
                console.log(fileTree)
            } catch (error) {
                console.error("Failed to fetch files", error);
            }
        };

        fetchData();
    }, []);

    // function parseFileTree(ft: any, currentRoot = ''): any[] {
    //     const collection: any[] = [];
    //
    //     Object.keys(ft).forEach(key => {
    //         let item;
    //
    //         if (key.endsWith(".*")) {
    //             item = {
    //                 name: key.substring(0, key.lastIndexOf('.')),
    //                 ext: key.substring(key.lastIndexOf('.') + 1), // Fixed to correctly capture extension
    //                 fullpath: `${currentRoot}/${key}`,
    //             };
    //         } else {
    //             item = {
    //                 name: key,
    //                 fullpath: `${currentRoot}/${key}`,
    //                 children: parseFileTree(ft[key], `${currentRoot}/${key}/`) // Fixed and added slash for correct path
    //             };
    //         }
    //         collection.push(item);
    //     });
    //
    //     return collection;
    // }
    //
    // const renderFileTree = (nodes: any[]) => (
    //     <VStack align='start'>
    //         {nodes.map((node, index) => (
    //             <Box key={index}>
    //                 {node.children ? (
    //                     <VStack align='start'>
    //                         <Text fontWeight='bold'>{node.name}/</Text>
    //                         {renderFileTree(node.children)}
    //                     </VStack>
    //                 ) : (
    //                     <Text>{node.name}.{node.ext}</Text>
    //                 )}
    //             </Box>
    //         ))}
    //     </VStack>
    // );

    return (
        <main className={styles.main}>
            <Flex direction="column" p={5}>
                <Heading mb={5}>This is the lab</Heading>
                {/*{Object.keys(fileTree).length > 0 && renderFileTree(parseFileTree(fileTree))}*/}
            </Flex>
        </main>
    );
}

// 'use client'
//
// import React, {useState, useEffect} from 'react';
// import styles from "../app/page.module.css";
// import {Box, Heading} from "@chakra-ui/react"; // ensure this path is correct
//
// export default function ArcticLab() {
//     const [fileTree, setFileTree] = useState({});
//
//     useEffect(() => {
//         // Fetch the file list from the API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/files'); // Use the correct API endpoint
//                 if (!response.ok) {
//                     throw new Error(`Error: ${response.statusText}`);
//                 }
//                 const data = await response.json();
//                 setFileTree(data);
//             } catch (error) {
//                 console.error("Failed to fetch files", error);
//             }
//         };
//
//         fetchData();
//     }, []); //
//
//     function parseFileTree(ft: {}) {
//         /*
//             the ft obj is made up of strings, and {} that contain strings
//             make a new object that will check to see if the value of the property is a string or {}
//             if its a string, it should be added as a property on the new object, and should have the following properties:
//             file name
//             extension
//             full path
//             if its a directory, it should be added as a property on the object. it should the recursively look through
//             that directory and perform the same file/dir check on every file in that directory, and so on for each
//             subsequent directory.
//
//             if i had a directory with the following files:
//
//             mockdir/ (directory)
//             testfile1.txt
//             otherdir/ (directory)
//             otherdir/testfile2.bash
//
//             the obj would be structured as follows:
//             const x = {
//                 'mockdir': {
//                     'name': 'mockdir',
//                     'ext': '/',
//                     'fullpath': '/mockdir/',
//                     'children': {}
//                 },
//                 'testfile1.txt': {
//                     'name': 'testfile1',
//                     'ext': '.txt',
//                     'fullpath': '/testfile1.txt',
//                 },
//                 'otherdir': {
//                     'name': 'mockdir',
//                     'ext': '/',
//                     'fullpath': '/mockdir/',
//                     'children': {
//                         'testfile2.bash': {
//                             'name': 'testfile2',
//                             'ext': '.bash',
//                             'fullpath': '/otherdir/testfile2.bash'
//                         }
//                     }
//                 }
//             }
//         */
//
//
//         // return (<Box>{JSON.stringify(ft, null, 2)}</Box>)
//     }
//
//     return (
//         <main className={styles.main}>
//             <h1>This is the lab</h1>
//             {/* Render the file tree or a message if it's empty */}
//             {Object.keys(fileTree).length ?
//                 (
//                     parseFileTree(fileTree)
//                 ) : (
//                     <p>No files to display.</p>
//                 )
//             }
//         </main>
//     );
// }
