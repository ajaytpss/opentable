import { NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req) {
  const bearerToken = req.headers.get("beareraccesstoken");

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized user!" }),
      { status: 401 }
    );
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized user!" }),
      { status: 401 }
    );
  }
  const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, jwtSecret);
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized user!" }),
      { status: 401 }
    );
  }
}

export const config = { matcher: ["/api/auth/me"] };
