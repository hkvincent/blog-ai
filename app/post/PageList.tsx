"use client";
import React, { useContext, useEffect, useState } from 'react';
import PostItem from '@/app/post/PostItem';
import PostsContext from '@/context/PostContext';
import { useParams } from 'next/navigation';

const PageList = ({ postList, hasMorePosts }: { postList: any[], hasMorePosts: boolean }) => {
    const { postId } = useParams();
    const { setPosts, posts, getPosts, noMorePosts, setHasMorePosts } = useContext(PostsContext)!;

    useEffect(() => {
        setPosts(postList);
        if (postId) {
            const exists = posts.find((post: any) => post._id === postId);
            if (!exists) {
                console.log('getting posts');
                if (typeof postId === 'string') {
                    getPosts({ getNewerPosts: true, lastPostId: postId });
                } else if (typeof postId === 'object') {
                    getPosts({ getNewerPosts: true, lastPostId: postId[0] });
                }
            }
        }
    }, [setPosts, postId, getPosts, postList]);

    useEffect(() => {
        if (posts.every((post: any) => !postList.some((p: any) => p._id !== post._id))) {
            setHasMorePosts(hasMorePosts);
        }
    }, [setHasMorePosts, hasMorePosts, postId, posts, postList]);

    return (
        <>
            {posts.map((post: any) => (
                <PostItem post={post} key={post._id} />
            ))}
            {!noMorePosts && (
                <div
                    onClick={() => {
                        getPosts({ lastPostId: posts[posts.length - 1]._id });
                    }}
                    className="hover:underline text-sm text-slate-400 text-center cursor-pointer mt-4"
                >
                    Load more posts
                </div>
            )}
        </>
    );
};

export default PageList;