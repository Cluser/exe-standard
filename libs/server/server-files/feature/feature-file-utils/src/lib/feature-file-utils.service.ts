import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@exe/server/server-files/core/prisma-client'; 

@Injectable()
export class FeatureFileUtilsService {
    constructor(private readonly prisma: PrismaClientService) {}

    getFiles(): Promise<any[]> {
        return this.prisma.file.findMany();
    }
}
