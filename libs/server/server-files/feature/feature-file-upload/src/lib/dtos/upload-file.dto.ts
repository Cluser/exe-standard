import 'multer';

export class UploadFileDto {
    file: Express.Multer.File;
    path: string;

    constructor(file: Express.Multer.File, path: string) {
        this.file = file;
        this.path = path;
    }
}