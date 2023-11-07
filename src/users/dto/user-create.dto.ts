// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  readonly firstname: string;

  @ApiProperty()
  @IsString()
  readonly lastname: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsPhoneNumber('CA')
  readonly phonenumber: string;

  @ApiProperty()
  @IsString()
  readonly password: string;
}
