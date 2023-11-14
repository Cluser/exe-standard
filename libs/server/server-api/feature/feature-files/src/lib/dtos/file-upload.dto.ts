import { ApiProperty } from "@nestjs/swagger";
import 'multer';

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    file: Express.Multer.File;
}