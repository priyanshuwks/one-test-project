import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth/next";
import { NEXT_AUTH } from "@/app/lib/authOption";



// export function GET(req : NextRequest, {params} : {params : {
//     nextauth : string[]
// }}){
//     console.log(params);
//     return NextResponse.json({
//         msg : 'inside auth route'
//     })
// }

const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;