import fs from 'fs';
import path from 'path';
import {NextApiRequest, NextApiResponse} from "next";

interface FileSystemNode {
    name: string;
    type: 'file' | 'directory';
    path: string;
    children?: FileSystemNode[];
}

function getDirectoryContents(dirPath: string): FileSystemNode[] {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.map(dirent => {
        const fullPath = path.join(dirPath, dirent.name);
        if (dirent.isDirectory()) {
            return {
                name: dirent.name,
                type: 'directory' as const,
                path: fullPath,
                children: getDirectoryContents(fullPath) // Recursively get contents
            };
        } else {
            return {
                name: dirent.name,
                type: 'file' as const,
                path: fullPath
            };
        }
    });
}

// ... in your API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const smbSharePath = '/arctic_lab'; // The path to your SMB share
        const directoryStructure = getDirectoryContents(smbSharePath);
        res.status(200).json(directoryStructure);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ error: 'Error reading directory', message: error.message });
        } else {
            res.status(500).json({ error: 'Error reading directory', message: 'An unknown error occurred' });
        }
    }
}
