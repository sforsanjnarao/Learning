import { PrismaClient } from "../generated/prisma";
const client =new PrismaClient()

async function createUser() {
    await client.user.create({
        data: {
            username:'sanjana',
            email:'sanjana2004@gmail.com',
            password: 'ndnjfn'
        }
    })
}

createUser()
