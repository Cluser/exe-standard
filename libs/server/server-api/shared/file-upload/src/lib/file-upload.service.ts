import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UPLOAD_PATH } from '@exe/server/shared/config';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import 'multer';


@Injectable()
export class FileUploadService {
    private readonly mainUploadPath = UPLOAD_PATH.MAIN;

    /**
     * Uploads a file to the server and returns the file path.
     * @param file The file to upload.
     * @returns An observable that emits the file path once the upload is complete.
     */
    uploadFile(file: Express.Multer.File, path: string): Observable<string> {
      return of(this.saveFile(this.mainUploadPath + path, file.originalname, file))
    }

    /**
     * Uploads an array of files and returns an observable of the saved file paths.
     * @param files - The array of files to upload.
     * @returns An observable of the saved file paths.
     */
    uploadFiles(files: Express.Multer.File[], path: string): Observable<string[]> {
      let paths: string[] = [];
      files.forEach((file: Express.Multer.File) => {   
        paths = [
          ...paths,
          this.saveFile(this.mainUploadPath + path, file.originalname, file)
        ];
      });
      return of(paths);
    }

    /**
     * Saves a file to the specified path with the given file name.
     * @param path - The path where the file will be saved.
     * @param fileName - The name of the file to be saved.
     * @param file - The file to be saved.
     * @returns The full path of the saved file.
     */
    private saveFile(path: string, fileName: string, file: Express.Multer.File): string {
        this.createUploadsFolder();
        const writeStream = createWriteStream(path + fileName);
        const buffer = Buffer.isBuffer(file.buffer) ? file.buffer : Buffer.from(file.buffer);
        writeStream.write(buffer);
        writeStream.end();
        return `${path}${fileName}`;
    }

    /**
     * Creates the uploads folder if it doesn't already exist.
     */
    private createUploadsFolder(): void {
        if (existsSync(this.mainUploadPath)) {
            return;
        }
        mkdirSync(this.mainUploadPath);
    }

}