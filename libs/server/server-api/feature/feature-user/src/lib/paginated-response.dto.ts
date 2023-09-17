import { ApiProperty } from "@nestjs/swagger";

export class PaginatedResponseDto<T> {
    @ApiProperty()
    data: T[];
    
    @ApiProperty()
    totalCount?: number;

    @ApiProperty()
    offset?: number;

    @ApiProperty()
    limit?: number;
  
    constructor(data: T[], totalCount: number, offset: number, limit: number) {
      this.data = data;
      this.totalCount = data.length;
      this.offset = offset;
      this.limit = limit;
    }
  }