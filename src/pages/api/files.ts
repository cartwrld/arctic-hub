// src/pages/api/files.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const smbSharePath = '/arctic_lab'; // The path to your SMB share

interface FileDetail {
    name: string;
    ext: string;
    fullpath: string;
    children?: { [key: string]: FileDetail };
}

interface DirectoryResult {
    [key: string]: FileDetail;
}

// A function to recursively read a directory and return detailed file information
function readDirectory(dir: string, parentPath = ''): DirectoryResult {
    const result: DirectoryResult = {};
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
        const fullPath = path.join(dir, dirent.name);
        const relativePath = path.join(parentPath, dirent.name);
        // console.log(fullPath)
        // console.log(relativePath)
	if (dirent.isDirectory()) {
            result[dirent.name] = {
                name: dirent.name,
                ext: '/',
                fullpath: relativePath + '/',
                children: readDirectory(fullPath, relativePath)
            };
        } else {
            const ext = path.extname(dirent.name);
            result[dirent.name] = {
                name: path.basename(dirent.name, ext),
                ext: ext,
                fullpath: relativePath
            };
        }
    });
    console.log(result)
    return result;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const directoryStructure = readDirectory(smbSharePath);
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
