'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const PostItem = ({ post }: { post: any }) => {
    const { postId } = useParams()
    return (
        <Link href={`/post/${post._id}`}>
            <div className={`py-1 border border-white/0 block text-ellipsis overflow-hidden 
           my-1 px-2 bg-white/10 cursor-pointer rounded-sm ${postId === post._id ?
                    'bg-white/40 border-white' : ''
                }`}>
                <div className="text-sm font-bold">{post.title}</div>
                {/* <div className="text-sm">{post.metaDescription}</div> */}
            </div>
        </Link>
    );
};

export default PostItem;