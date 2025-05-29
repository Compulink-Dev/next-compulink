import dbConnect from '@/lib/dbConnect';
import VacancyModel from '@/lib/models/VacancyModel';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  try {
    const vacancies = await VacancyModel.find().sort({ createdAt: -1 });
    return NextResponse.json(vacancies, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching vacancies' }, { status: 500 });
  }
}

export async function POST(req: any) {
  await dbConnect();
  try {
    const body = await req.json();
    const vacancy = await VacancyModel.create(body);
    return NextResponse.json(vacancy, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating vacancy' }, { status: 400 });
  }
}
