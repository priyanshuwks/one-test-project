import { NextRequest, NextResponse } from "next/server";
import z from "zod";



export async function POST(req : NextRequest){
    const body = await req.json();

    const flatId = body.flatId;
    //validate flatId type
    if(typeof(flatId) !== 'number'){
        return NextResponse.json({
            success : false,
            msg : 'flatId should be Integer'
        })
    }

    

}