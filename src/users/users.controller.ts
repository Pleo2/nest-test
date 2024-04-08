import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    async findAll(): Promise<Array<Object>> {
        return await this.userService.findAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Object> {
        return await this.userService.getById(id)
    }

    @Post()
    async createUser(@Body() createUserDto: {}) {
        return createUserDto
    }

    @Patch(':id')
    async updateUser(
        @Body() updateUserDto: {},
        @Param('id') id: string,
    ): Promise<Object> {
        return {
            id,
            ...updateUserDto,
        }
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string): Promise<String> {
        return await this.userService.deleteById(id)
    }
}
