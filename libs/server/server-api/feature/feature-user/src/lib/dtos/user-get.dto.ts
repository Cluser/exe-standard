import { User } from ".prisma/client";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UserGetDto implements User {
    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    id: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()

    name: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()

    surname: string;
  
    constructor(id: number, name: string, surname: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}