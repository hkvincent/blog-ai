"use client";
import React, { useContext, useEffect, useState } from 'react';
import LoginInfo from '@/components/loginInfo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/logo/logo';
import PostItem from '@/app/post/PostItem';
import PostsContext from '@/context/PostContext';
import { useParams } from 'next/navigation';
import { getAppProps } from '@/utils/getAppProps';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { getSession } from '@auth0/nextjs-auth0';

const PageList = () => {
    const { setPosts, posts, getPosts, noMorePosts } = useContext(PostsContext)!;
    const [availableTokens, setAvailableTokens] = useState(0);
    const { postId } = useParams();

    useEffect(() => {
        (async () => {
            const userSession = await getSession();
            // const appProps = await getAppProps();
            // const client = await clientPromise;
            // const pageList = appProps.posts;
            // const db = client.db('BlogStandard');
            // const post = await db.collection('posts').findOne({
            //     _id: new ObjectId(appProps.selectedPost?._id),
            //     userId: userSession?._id,
            // });
            // setAvailableTokens(appProps.availableTokens);
            // setPosts(appProps.posts);
            // if (postId) {
            //     const exists = pageList.find((post: any) => post._id === postId);
            //     if (!exists) {
            //         getPosts({ getNewerPosts: true, lastPostDate: post?.postDate });
            //     }
            // }
        })();
    }, [posts, setPosts, postId, getPosts]);


    return (
        <>
            <div className="bg-slate-800 px-2 ">
                <Logo />
                <Link href="/post/new" className="btn">  new post </Link>
                <Link href="/post/token-topup" className=" mt-6 mb-4 text-center flex items-center gap-2 justify-center">
                    <FontAwesomeIcon icon={faCoins} className="text-yellow-500 align-middle w-6" size="sm" />
                    <span className="align-middle">{availableTokens} tokens available</span>
                </Link>
            </div>
            <div className="px-4 flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
                {posts.map((post: any) => (
                    <PostItem post={post} key={post._id} />
                ))}
            </div>
            <div className="bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 px-2 h-24">
                <LoginInfo />
            </div>
        </>
    );
};

export default PageList;