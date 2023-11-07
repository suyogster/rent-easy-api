import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RentService } from './rents.service';
import { Rent } from './entities/rent.entity';
import { CreateRentDto } from './dto/create-rent.dto';

@ApiTags('rents')
@Controller('rents')
export class RentsController {
  constructor(private readonly rentService: RentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a rent' })
  @ApiResponse({
    status: 201,
    description: 'The rent has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createRentDto: CreateRentDto): Promise<Rent> {
    return this.rentService.create(createRentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rents' })
  @ApiResponse({
    status: 200,
    description: 'The rents have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'No rents found.' })
  async findAll(): Promise<Rent[]> {
    return this.rentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a rent by id' })
  @ApiResponse({
    status: 200,
    description: 'The rent has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Rent not found.' })
  async findOne(@Param('id') id: string): Promise<Rent> {
    return this.rentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a rent by id' })
  @ApiResponse({
    status: 200,
    description: 'The rent has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Rent not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateRentDto: CreateRentDto,
  ): Promise<Rent> {
    return this.rentService.update(id, updateRentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a rent by id' })
  @ApiResponse({
    status: 200,
    description: 'The rent has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Rent not found.' })
  async delete(@Param('id') id: string): Promise<Rent> {
    return this.rentService.delete(id);
  }
}
