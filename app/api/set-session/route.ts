// app/api/set-session/route.ts
import { auth } from "@/firebase/admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ success: false, message: "Missing token" });
    }

    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: ONE_WEEK * 1000,
    });

    (await cookies()).set("session", sessionCookie, {
      maxAge: ONE_WEEK,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Set session error:", error);
    return NextResponse.json({ success: false, message: "Server error" });
  }
}
