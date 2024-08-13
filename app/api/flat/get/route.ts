import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//GET ADVERTISED FLAT WITH GIVEN FLAT-ID
export async function POST(req : NextRequest){
    const body = await req.json();

    const flatId = body.flatId;
    console.log(typeof(flatId))
    if(typeof(flatId) !== 'string'){
        return NextResponse.json({
            success : false,
            msg : 'type error'
        })
    }

    const flatDetails = await prisma.flat.findUnique({
        where : {
            id : flatId
        }
    })

    if(flatDetails){
        return NextResponse.json({
            success : true,
            data : flatDetails
        })
    }else{
        return NextResponse.json({
            success : false,
            msg : 'Error while fetching from db'
        })
    }
}


//Get all the flats from the database.
export async function GET(req : NextRequest){
    
    const allFlats = await prisma.flat.findMany();

    if(allFlats){
        return NextResponse.json({
            success : true,
            data : allFlats
        })
    }else{
        return NextResponse.json({
            success : false,
            msg : 'error occured while searchng for flats...'
        })
    }
}