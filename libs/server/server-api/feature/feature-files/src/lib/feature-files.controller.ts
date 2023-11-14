import { MICROSERVICES, UPLOAD_PATH } from '@exe/server/shared/config';
import { Controller, Post, Inject, UseInterceptors, UploadedFiles, UploadedFile, ParseFilePipeBuilder, HttpStatus, Get, StreamableFile, Header } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, switchMap, tap } from 'rxjs';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FileUploadDto, FilesUploadDto } from './dtos';
import { FileUploadService } from '@exe/server/server-api/shared/file-upload';
import { createReadStream } from 'fs';

@ApiTags('Files')
@ApiBearerAuth('access-token')
@Controller()
export class FeatureFilesController {
  constructor(
    @Inject(MICROSERVICES.SERVER_FILES.name) private readonly serverFilesClient: ClientProxy,
    private fileUploadService: FileUploadService
  ) {}

    /**
   * Uploads a file to the server and returns the path where it was saved.
   * @param file The file to upload.
   * @returns An Observable that emits the path where the file was saved.
   */
  @Post('uploadFile')
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @UseInterceptors(FileInterceptor('file', ))
  uploadFile(@UploadedFile() file: Express.Multer.File): Observable<string> {
    return this.fileUploadService.uploadFile(file, UPLOAD_PATH.FILES).pipe(
      switchMap((path: string) => {
        return this.serverFilesClient.send('uploadFile', { file, path });
      })
    );
  }

    /**
   * Uploads files to the server and returns an observable of the uploaded file paths.
   * @param files An array of files to upload.
   * @returns An observable of the uploaded file paths.
   */
  @Post('uploadFiles')
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FilesUploadDto })
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles(new ParseFilePipeBuilder()
    .addFileTypeValidator({
      fileType: 'jpeg',
    })
    .addMaxSizeValidator({
      maxSize: 10000000
    })
    .build({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    }),
  ) files: Express.Multer.File[]): Observable<string[]> {
    return this.fileUploadService.uploadFiles(files, UPLOAD_PATH.FILES).pipe(
      tap((paths: string[]) => {
        const params = files.map((file, index) => ({ file, path: paths[index] }));
        this.serverFilesClient.send('uploadFiles', params).subscribe();
      })
    );
  }

      /**
     * Downloads a file from the server and returns it as a StreamableFile.
     * @returns A StreamableFile of the downloaded file.
     */
      @Get('downloadFile')
      @Header('Content-Type', 'application/json')
      async getStaticFile(): Promise<StreamableFile> {
        const path = await this.serverFilesClient.send<string>('downloadFile', { id: 5 }).toPromise();
        const file = createReadStream(path as string);
        return new StreamableFile(file);
      }
  
}
