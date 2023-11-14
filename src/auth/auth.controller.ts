import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'User Login' })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in',
  })
  @Post()
  async login(@Body() credentials: LoginDto) {
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.password,
    );

    if (user) {
      return this.authService.login({
        username: credentials.email,
        userId: user.id,
      });
    }
  }
}
