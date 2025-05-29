import dbConnect from '@/lib/dbConnect';
import VacancyModel from '@/lib/models/VacancyModel';
import { NextResponse } from 'next/server';


export async function GET(_: any, { params }: any) {
  await dbConnect();
  const { id } = params;
  try {
    const vacancy = await VacancyModel.findById(id);
    if (!vacancy) return NextResponse.json({ error: 'Vacancy not found' }, { status: 404 });
    return NextResponse.json(vacancy, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching vacancy' }, { status: 500 });
  }
}

export async function PUT(req: any, { params }: any) {
  await dbConnect();
  const { id } = params;
  try {
    const body = await req.json();
    const vacancy = await VacancyModel.findByIdAndUpdate(id, body, { new: true });
    if (!vacancy) return NextResponse.json({ error: 'Vacancy not found' }, { status: 404 });
    return NextResponse.json(vacancy, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating vacancy' }, { status: 400 });
  }
}

export async function DELETE(_: any, { params }: any) {
  await dbConnect();
  const { id } = params;
  try {
    const vacancy = await VacancyModel.findByIdAndDelete(id);
    if (!vacancy) return NextResponse.json({ error: 'Vacancy not found' }, { status: 404 });
    return NextResponse.json({ message: 'Vacancy deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting vacancy' }, { status: 500 });
  }
}
