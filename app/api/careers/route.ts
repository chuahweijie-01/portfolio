import { connectToDatabase } from '@/app/lib/mongodb';
import Career from '@/app/schemas/Career';
import { NextResponse } from 'next/server';

export async function GET() {
    await connectToDatabase();
    const careers = await Career.find({});
    return NextResponse.json(careers);
}

export async function POST(req: Request) {
    await connectToDatabase();
    const body = await req.json();
    const career = await Career.create(body);
    return NextResponse.json(career);
}