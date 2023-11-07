import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly firstname: string;
  @ApiProperty()
  readonly lastname: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly phonenumber: string;
}
