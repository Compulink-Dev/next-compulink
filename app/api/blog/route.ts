// app/api/blog/route.ts
import dbConnect from '@/lib/dbConnect';
import BlogPost from '@/lib/models/(blogs)/BlogPost';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Connect to your database
        await dbConnect();

        // Fetch all blog posts
        const posts = await BlogPost.find({}); // Replace with your actual query

        // Format the posts, ensuring likes and comments are initialized
        const formattedPosts = posts.map(post => ({
            _id: post._id.toString(),
            title: post.title,
            content: post.content,
            createdAt: post.createdAt,
            image: post.image,
            likes: post.likes || 0,  // Initialize likes
            comments: post.comments || []  // Initialize comments as an empty array if undefined
        }));

        // Return the formatted posts
        return NextResponse.json({ posts: formattedPosts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { title, content } = await req.json();
        await dbConnect();
        const newPost = new BlogPost({ title, content });
        await newPost.save();
        return NextResponse.json({ post: newPost }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
