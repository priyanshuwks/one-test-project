import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createFlatSchema = z.object({
    "imageUrl" : z.string(),
    "flatSize" : z.string(),
    "description" : z.string(),
    "furnished" : z.string(),
    "price" : z.number(),
    "requiredFor" : z.string(),
    "balconyFacing" : z.string(),
    "publisherId" : z.number() 
})
export async function POST(req : NextRequest){
    const body = await req.json();
    //validate body
    const valBody = createFlatSchema.safeParse(body);
    if(!valBody.success){
        return NextResponse.json({
            success : false,
            msg : 'body validation failed'
        })
    }
    console.log('body was validated')
    const createFlat = await prisma.flat.create({
        data : body
    })

    //check if flat was created
    if(createFlat){
        return NextResponse.json({
            success : true,
            msg : createFlat
        })
    }else{
        return NextResponse.json({
            success : false,
            msg : 'flat creation failed'
        })
    }
}