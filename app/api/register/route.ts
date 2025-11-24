
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // In a real application, you would save the user to a database
  console.log(`Registering user with email: ${email} and password: ${password}`);

  return NextResponse.json({ success: true });
}
