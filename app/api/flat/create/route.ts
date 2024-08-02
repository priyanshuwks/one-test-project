import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createFlatSchema = z.object({
    "imageUrl" : z.string().optional(),
    "flatSize" : z.string().optional(),
    "description" : z.string().optional(),
    "furnished" : z.string().optional(),
    "price" : z.string().optional(),
    "requiredFor" : z.string().optional(),
    "balconyFacing" : z.string().optional(),
    "publisherId" : z.string() 
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

    const createFlat = await prisma.flat.create({
        data : body
    })

    //check if flat was created
    if(createFlat){
        return NextResponse.json({
            success : true,
            msg : 'new Flat Vacancy saved'
        })
    }else{
        return NextResponse.json({
            success : false,
            msg : 'flat creation failed'
        })
    }
}