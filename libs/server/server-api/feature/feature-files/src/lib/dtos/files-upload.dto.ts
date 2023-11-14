import { ApiProperty } from "@nestjs/swagger";
import 'multer';

export class FilesUploadDto {
    @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    files: Express.Multer.File[];
}
  