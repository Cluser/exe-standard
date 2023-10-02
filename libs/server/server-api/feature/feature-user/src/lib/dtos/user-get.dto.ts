import { User } from '.prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UserGetDto implements User {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  surname: string;

  constructor(id: number, name: string, surname: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
}
