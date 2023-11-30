import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@exe/server/server-files/core/prisma-client'; 
import { UploadFileDto } from './dtos';


@Injectable()
export class FeatureFileUploadService {
    constructor(private readonly prisma: PrismaClientService) {}

    /**
     * Uploads an array of files.
     * @param uploadFiles An array of UploadFileDto objects representing the files to upload.
     * @returns A Promise that resolves to an array of results from uploading each file.
     */
    uploadFiles(uploadFiles: UploadFileDto[]): Promise<any[]> {
        return Promise.all(uploadFiles.map(uploadFile => this.uploadFile(uploadFile)));
    }

    /**
     * Uploads a file to the server and saves its metadata to the database.
     * @param uploadFile - The file to be uploaded, along with its metadata.
     * @returns A Promise that resolves to the saved file metadata.
     */
    uploadFile(uploadFile: UploadFileDto): Promise<any> {   
        return this.prisma.file.create({
            data: {
                name: uploadFile.file.originalname,
                mimetype: uploadFile.file.mimetype,
                path: uploadFile.path,
                size: uploadFile.file.size,
            },
        });
    }
}
