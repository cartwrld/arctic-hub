// src/pages/api/files.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const smbSharePath = '/arctic_lab'; // The path to your SMB share

interface DirectoryResult {
    [key: string]: string | DirectoryResult;
}

// A function to recursively read a directory
function readDirectory(dir: string): DirectoryResult {
    const result: DirectoryResult = {};
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            result[file] = readDirectory(fullPath); // Recurse into subdirectories
        } else {
            result[file] = fullPath; // Store the file path
        }
    });
    return result;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const arcticrpi = readDirectory(smbSharePath);
        console.log(arcticrpi);
        res.status(200).json(arcticrpi);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ error: 'Error reading directory', message: error.message });
        } else {
            res.status(500).json({ error: 'Error reading directory', message: 'An unknown error occurred' });
        }
    }
}
