import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse } from "next/server";


const prisma = PrismaClient()

export async function GET() {
    const todo = await prisma.todo.findmany();
    return NextResponse.json(todo)
}

export async function POST(req) {
    const {task }= req.body
    const newTask= await prisma.todo.create({
        data:({
            task:task,
            checked: true
        })
    })
    return NextResponse.status(200).json(newTask)
}


