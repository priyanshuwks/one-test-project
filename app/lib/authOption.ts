import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
              username: { label: 'email', type: 'text', placeholder: '' },
              password: { label: 'password', type: 'password', placeholder: '' },
            },
            //@ts-ignore
            async authorize(credentials: any) {

                //write here validation logic
                console.log(credentials);

                //find the user in database
                // const res = await axios.post(`process.env.NEXT_PUBLIC_BASE_URL/api/getuser`, credentials.username);
                // console.log(res);

                const res = await prisma.user.findUnique({
                    where : {
                        username : credentials.username
                    }
                })

                const user = res;
                console.log('inside authorize fn');
                console.log(user)


                if(!user){
                    return null;
                }else{
                    if(user.password == credentials.password){
                        return {
                            id : user.id,
                            username : user.username
                        }
                    }
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : {
        // async signIn({user} : any){
        //     console.log(user);
        //     if(user.email == 'raman3@gmail.com')
        //         return false;
        //     return true;
        // },
        async jwt({token, user} : any){
            if(user){
                token.uid = user.id;
                token.username = user.username
            }

            return token;
        },
        async session({session, token}: any){
            
            if(token){
                session.user._id = token.uid,
                session.user.username = token.username
            }
            
            return session;
        }
    }
}