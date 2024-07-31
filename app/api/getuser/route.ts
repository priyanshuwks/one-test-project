import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    console.log('get request')
    const body = await req.json();
    console.log(body)
    const user = await prisma.user.findUnique({
        where : {
            username : body.username
        }
    })
    console.log(user)
    if(user){
        return NextResponse.json({
            success : true,
            data : user
        })
    }else{
        return NextResponse.json({
            success : false,
            data : null
        })
    }
}