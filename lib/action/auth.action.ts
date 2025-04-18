"use server";

import { db,auth } from "@/firebase/admin";
import { cookies } from "next/headers";
const ONE_WEEK=60*60*24*7;

export async function signUp(params: SignUpParams){
    const{uid,name,email}=params;
    try{
        const userRecord=await db.collection('users').doc(uid).get();
        if(userRecord.exists){
            return{
                success:false,
                message:'User already exists,Please sign in instead.'
            }
        }
        await db.collection('user').doc(uid).set({
            name,email
        })
        return{
            success:true,
            message:'Account created Succesfully. Please sign in.'
        }

    }catch(e:any){
        console.error("error creating a user",e);
        if(e.code === 'auth/email-already-exists'){
            return{
                success: false,
                message: 'This Email is already in use.'
            }
        }
        return{
            success: false,
            message : 'Failed to create a account.'

        }
    }
}
export async function setSessionCookie(idToken:string){
    const cookieStore = await cookies();
    const setSessionCookie=await auth.createSessionCookie(idToken,{
        expiresIn:ONE_WEEK*1000
}); 
    cookieStore.set('session',setSessionCookie,{
        maxAge:ONE_WEEK,
        httpOnly: true,
        secure:process.env.NODE_ENV ==='production',
        sameSite: 'lax'
    })
}
export async function signIn(params:SignInParams){
    const {email,idToken}=params;
    try{
        const userRecord = await auth.getUserByEmail(email);
        if(!userRecord){
            return{
                success:false,
                message:'User does not exist.Create a account instead.'
            }
        }
        await setSessionCookie(idToken);

    }catch(e){
        console.error(e);
        return{
            sucess:false,
            message:'Failed to log into an account.'
        }
    }
}
export async function getCurrentUser(): Promise< User | null> {
    const cookieStore = await cookies();
    const sessionCookie =cookieStore.get('session')?.value;
    if(!sessionCookie) return null;
    try{
        const decodedClaims= await auth.verifySessionCookie(sessionCookie,true);
        const userRecord=await db.
        collection('users')
        .doc(decodedClaims.uid)
        .get();
        if(!userRecord.exists) return null;
        return{
            ...userRecord.data(),
            id:userRecord.id,
        }as User;

    }catch(e){
        console.log(e)
        return null;
    }
}
export async function isAuthenticated(){
    const user =await getCurrentUser();
    return !!user; //!! converts object present into boolean value like [{name:'skrt'}-> to find name present or not  !{}-->false -->!false --->true]
}