"use client";
import React, { useContext, useEffect, useState } from 'react';
import PostItem from '@/app/post/PostItem';
import PostsContext from '@/context/PostContext';
import { useParams } from 'next/navigation';

const PageList = () => {
    const { postId: selectedPostId } = useParams();
    const { setPosts, posts, getPosts, noMorePosts, searchTerm } = useContext(PostsContext)!;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const exists = posts.find((post: any) => post._id === selectedPostId);

        if (!exists) {
            if (typeof selectedPostId === 'string') {
                getPosts({ selectedPostId: selectedPostId });
            } else if (typeof selectedPostId === 'object') {
                getPosts({ selectedPostId: selectedPostId[0] });
            } else if (posts.length === 0) {
                console.log('PageList useEffect getPosts');
                getPosts({});
            }
        }
    }, [setPosts, selectedPostId, getPosts]);

    // useEffect(() => {
    //     if (posts.every((post: any) => !postList.some((p: any) => p._id !== post._id))) {
    //         setHasMorePosts(hasMorePosts);
    //     }
    // }, [setHasMorePosts, hasMorePosts, postId, posts, postList]);

    const loadMorePosts = async () => {
        setIsLoading(true);
        await getPosts({ lastPostId: posts[posts.length - 1]._id, searchTerm: searchTerm });
        setIsLoading(false);
    };

    return (
        <>
            {posts.map((post) => (
                <PostItem post={post} key={post._id} />
            ))}
            {!noMorePosts && (
                <div
                    onClick={loadMorePosts}
                    className="hover:underline text-sm text-slate-400 text-center cursor-pointer my-4"
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 1.37.259 2.678.741 3.824l1.505-1.533z"
                                ></path>
                            </svg>
                        </div>
                    ) : (
                        'Load more posts'
                    )}
                </div>
            )}
        </>
    );
};

export default PageList;