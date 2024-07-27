import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import z from "zod";

const prisma = new PrismaClient()

// export async function GET(){
//     const session = await getServerSession();
    
//     return NextResponse.json({
//         data : session
//     })
// }
//zod schema
const signupSchema = z.object({
    username : z.string().email(),
    password : z.string().min(6)
})
interface SaveDataType {
    username : String,
    password : String
}
export async function POST(req : NextRequest){
    const body = await req.json();
    const validateSignupInput = signupSchema.safeParse(body);
    
    if(!validateSignupInput.success){
        return NextResponse.json({
            success : false,
            msg : `Input Validation failed!`
        });
    }

    const saveData = {
        username : body.username,
        password : body.password
    };
    console.log(validateSignupInput);
    
    console.log(validateSignupInput.data);
    const dbResponse = await prisma.user.create({
        data : saveData
    });
    console.log(dbResponse)
    return NextResponse.json({
        success : true,
        msg : 'user created'
    })
}