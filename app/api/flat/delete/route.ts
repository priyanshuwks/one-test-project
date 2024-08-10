import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function POST(req : NextRequest){
    const body = await req.json();

    const flatId = body.id;
    //validate flatId type
    if(typeof(flatId) !== 'string'){
        return NextResponse.json({
            success : false,
            msg : 'flatId should be Integer'
        })
    }

    const deleteFlat = await prisma.flat.delete({
        where : {
            id : flatId
        }
    })

    if(deleteFlat){
        return NextResponse.json({
            success : true,
            msg : 'flat was deleted!',
        })
    }else{
        return NextResponse.json({
            success : false,
            msg : 'flat deletion failed'
        })
    }
}