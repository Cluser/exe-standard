import 'multer';

export class DownloadFileDto {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}
