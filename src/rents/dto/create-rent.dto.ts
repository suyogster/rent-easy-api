import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateRentDto {
  @IsString()
  readonly propertyName: string;
  @IsNumber()
  readonly amount: number;
  @IsString()
  readonly address: string;
  @IsString()
  readonly status: string;
  @IsNumber()
  readonly size: number;
  @IsArray()
  readonly testimonies: string[];
  @IsArray()
  readonly propertyImages: string[];
}
