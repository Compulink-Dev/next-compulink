// app/api/blog/[id]/route.ts
import dbConnect from '@/lib/dbConnect';
import BlogPost from '@/lib/models/(blogs)/BlogPost';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: any) {
    const { id } = params;
    try {
        await dbConnect();
        const post = await BlogPost.findById(id);
        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({
            _id: post._id.toString(),
            title: post.title,
            content: post.content,
            createdAt: post.createdAt,
            image: post.image,
            likes: post.likes,
            comments: post.comments
        });
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}
