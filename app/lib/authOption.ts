import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
              username: { label: 'email', type: 'text', placeholder: '' },
              password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {

                //write here validation logic
                console.log(credentials);
                
                return {
                    id: "user1",
                    email : credentials.username
                };
                // return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : {
        async signIn({user} : any){
            console.log(user);
            if(user.email == 'raman3@gmail.com')
                return false;
            return true;
        },
        async jwt({token, profile} : any){
            console.log(`token is below`);
            console.log(token)
            if(profile){
                console.log('first time signing in')
            }
            return token;
        },
        async session({session, token, user}: any){
            console.log('session below');
            console.log(session);
            console.log('token below');
            console.log(token);
            console.log('user below');
            console.log(user);
            session.user.my_id = token.sub;
            return session;
        }
    }
}