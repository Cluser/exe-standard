import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@exe/server/server-files/core/prisma-client';
import { DownloadFileDto } from './dtos';

@Injectable()
export class FeatureFileDownloadService {
  constructor(private readonly prisma: PrismaClientService) {}

  downloadFiles(downloadFiles: DownloadFileDto[]): Promise<any[]> {
    return Promise.all(downloadFiles.map((downloadFile) => this.downloadFile(downloadFile)));
  }

  async downloadFile(downloadFileDto: DownloadFileDto): Promise<string> {
    const file = await this.prisma.file.findUnique({
      where: {
        id: downloadFileDto.id
      }
    });
    return file?.path as string;
  }
}
