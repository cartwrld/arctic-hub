// src/pages/api/files.ts

import type {NextApiRequest, NextApiResponse} from 'next';
import path from 'path';
import {promises as fsPromises} from 'fs';

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

async function readDirectoryAsync(dir: string, parentPath = ''): Promise<DirectoryResult> {
    const result: DirectoryResult = {};
    const dirents = await fsPromises.readdir(dir, { withFileTypes: true });

    for (const dirent of dirents) {
        const fullPath = path.join(dir, dirent.name);
        const relativePath = path.join(parentPath, dirent.name);

        if (dirent.isDirectory()) {
            result[dirent.name] = {
                name: dirent.name,
                ext: '/',
                fullpath: relativePath + '/',
                children: await readDirectoryAsync(fullPath, relativePath)
            };
        } else {
            const ext = path.extname(dirent.name);
            result[dirent.name] = {
                name: path.basename(dirent.name, ext),
                ext: ext,
                fullpath: relativePath
            };
        }
    }
    return result;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const directoryStructure = await readDirectoryAsync(smbSharePath);
        res.status(200).json(directoryStructure);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({error: 'Error reading directory', message: error.message});
        } else {
            res.status(500).json({error: 'Error reading directory', message: 'An unknown error occurred'});
        }
    }
}
