import { NextResponse } from 'next/server';
import sql from '@/libs/db';

export async function GET() {
    const users = await sql`SELECT id, username, email FROM users`;
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const { username, email, password } = await req.json();
    await sql`
        INSERT INTO users (username, email, password)
        VALUES (${username}, ${email}, ${password})
    `;
    return NextResponse.json({ message: 'User created successfully' });
}
