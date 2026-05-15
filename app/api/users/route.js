/*
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/lib/models/User";

// GET all users
export async function GET() {
  await connectToDatabase();
  const users = await User.find({});
  return NextResponse.json(users);
}

// POST create a user
export async function POST(request) {
  await connectToDatabase();
  const body = await request.json();
  const user = await User.create(body);
  return NextResponse.json(user, { status: 201 });
}*/