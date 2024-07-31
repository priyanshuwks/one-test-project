import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import z from "zod";

const prisma = new PrismaClient();

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

    //check if this user already exists.
    const findUser = await prisma.user.findUnique({
        where : {
            username : body.username
        }
    })
    if(findUser){
        return NextResponse.json({
            success : false,
            msg : 'User already exists!'
        })
    }
    //below data will saved in the database
    const saveData = {
        username : body.username,
        password : body.password
    };
    
    
    const dbResponse = await prisma.user.create({
        data : saveData
    });

    if(dbResponse){
        return NextResponse.json({
            success : true,
            msg : 'user created'
        })
    }else{
        return NextResponse.json({
            success : false,
            msg : 'signup failed!'
        })
    }
    
}

export async function GET(req : NextRequest){
    console.log('get request')
    const body = await req.json();
    console.log(body)
    const user = await prisma.user.findUnique({
        where : {
            username : body.username
        }
    });
    console.log(user)
    if(user){
        return NextResponse.json({
            success : true,
            data : user
        })
    }else{
        return NextResponse.json({
            success : false,
            data : {}
        })
    }
}