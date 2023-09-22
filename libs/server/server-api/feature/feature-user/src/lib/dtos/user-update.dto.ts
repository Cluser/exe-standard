import { User } from ".prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UserUpdateDto implements User {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    surname: string;
  
    constructor(id: number, name: string, surname: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}