// app/api/blog/[id]/comment/route.ts

import dbConnect from '@/lib/dbConnect';
import BlogPost from '@/lib/models/(blogs)/BlogPost';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
    const { id, comment } = await req.json();
    try {
        await dbConnect();
        const post = await BlogPost.findByIdAndUpdate(id, { $push: { comments: comment } }, { new: true });
        return NextResponse.json({ success: true, comments: post.comments });
    } catch (error) {
        console.error('Error adding comment:', error);
        return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
    }
}