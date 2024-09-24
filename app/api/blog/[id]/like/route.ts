// app/api/blog/[id]/like/route.ts

import dbConnect from '@/lib/dbConnect';
import BlogPost from '@/lib/models/(blogs)/BlogPost';
import { NextResponse } from 'next/server';
// Ensure you have a connection utility

export async function POST(req: Request) {
    const { id } = await req.json();
    try {
        await dbConnect();
        const post = await BlogPost.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
        return NextResponse.json({ success: true, likes: post.likes });
    } catch (error) {
        console.error('Error liking post:', error);
        return NextResponse.json({ error: 'Failed to like post' }, { status: 500 });
    }
}