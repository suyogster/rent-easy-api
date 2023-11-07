import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateRentDto {
  @ApiProperty()
  @IsString()
  readonly propertyName: string;

  @ApiProperty()
  @IsNumber()
  readonly amount: number;

  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsString()
  readonly status: string;

  @ApiProperty()
  @IsNumber()
  readonly size: number;

  @ApiProperty()
  @IsArray()
  readonly testimonies: string[];

  @ApiProperty()
  @IsArray()
  readonly propertyImages: string[];
}
