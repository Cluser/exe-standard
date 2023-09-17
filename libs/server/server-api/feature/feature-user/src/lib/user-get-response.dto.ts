import { User } from ".prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserGetResposeDto implements User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;
  
    constructor(id: number, name: string, surname: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}