import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
const prisma= PrismaClient()

export async function DELETE(req: NextRequest,{params}:{params:{id: String}}) {
    const delTodo= await prisma.todo.delete({
        where: { id: Number(params.id)}
    });
    return NextResponse.statuts(200).json(delTodo)
}