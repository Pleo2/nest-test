import { Injectable } from '@nestjs/common'

interface User {
    id: string,
    name: string,
    username: string,
    password: string
}

@Injectable()
export class UsersService {
    private users: Array<User> = [
        {
            id: '12',
            name: 'piolina',
            username: 'victoriaBussines',
            password: '1234456'
        },
        {
            id: '23',
            name: 'piolino',
            username: 'pleo2',
            password: 'Piolin0.'
        },
    ]

    async findAll(): Promise<Array<Object>> {
        return this.users
    }

    async getById(id: string): Promise<Object> {
        return this.users.find((e) => e.id === id)
    }

    async createUser(user: User) {
        // TODO: validate user to be scheme user e
        return 
    }

    async updateUser(id: string, updateObject: Object | PromiseLike<Object>
    ): Promise<Object> {
        // TODO: Add index of id
        // validate if the user interface run
        // change the users id update the info
        return {
            id,
            ...updateObject,
        }
    }

    async deleteById(id: string): Promise<String> {
        return 'object delete succesfuly'
    }
}
