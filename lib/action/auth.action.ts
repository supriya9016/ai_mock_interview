"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;

// ✅ 1. Sign Up
export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. Please sign in instead.",
      };
    }

    await db.collection("users").doc(uid).set({ name, email });

    return {
      success: true,
      message: "Account created successfully. Please sign in.",
      
    };
  } catch (e: any) {
    console.error("Error creating user:", e);

    if (e.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already in use.",
      };
    }

    return {
      success: false,
      message: "Failed to create an account.",
    };
  }
}


// ✅ 2. Sign In (just return success)
export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log("");

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}
// ✅ 3. Set Session Cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000, // milliseconds
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}


// Sign out user by clearing the session cookie
export async function signOut() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}

// Get current user from session cookie
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    // get user info from db
    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    if (!userRecord.exists) return null;

    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error) {
    console.log(error);

    // Invalid or expired session
    return null;
  }
}

// Check if user is authenticated
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}
// 6.
export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
  const interviews = await db
  .collection('interviews')
  .where('userId','==',userId)
  .orderBy('createdAt','desc')
  .get();

  return interviews.docs.map((doc)=> ({
    id: doc.id,
    ...doc.data()
  }))as Interview[];

}
//7.
export async function getLatestInterviews(params:GetLatestInterviewsParams): Promise<Interview[] | null> {
  const{ userId,limit=20}=params;
  const interviews = await db
  .collection('interviews')
  .orderBy('createdAt','desc')
  .where('finalized','==',true)
  .where('userId','!=',userId)
  .limit(limit)
  .get();

  return interviews.docs.map((doc)=> ({
    id: doc.id,
    ...doc.data()
  }))as Interview[];

}

 


