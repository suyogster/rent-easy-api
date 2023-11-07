// user.dto.ts
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstname: string;

  @IsString()
  readonly lastname: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber('CA')
  readonly phonenumber: string;

  @IsString()
  readonly password: string;
}

export class UserDto {
  readonly id: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly phonenumber: string;
}
