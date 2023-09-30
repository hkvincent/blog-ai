import LoginInfo from '@/components/loginInfo';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/logo/logo';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getAppProps } from '@/utils/getAppProps';
import PostItem from './PostItem';


const AppLayout = async ({ children, params }: { children: any, params: { postId: string } }) => {
    const appProps = await getAppProps();
    console.log(params);

    return (
        <div className="grid grid-cols-[320px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <div className="bg-slate-800 px-2 ">
                    <Logo />
                    <Link href="/post/new" className="btn">  new post </Link>
                    <Link href="/post/token-topup" className=" mt-6 mb-4 text-center flex items-center gap-2 justify-center">
                        <FontAwesomeIcon icon={faCoins} className="text-yellow-500 align-middle w-6" size="sm" />
                        <span className="align-middle">{appProps.availableTokens} tokens available</span>
                    </Link>
                </div>
                <div className="px-4 flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
                    {appProps.posts.map((post: any) => (
                        <PostItem post={post} key={post._id} />
                    ))}
                </div>
                <div className="bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 px-2 h-24">
                    <LoginInfo />
                </div>
            </div>
            {children}
        </div>
    );
};

export default withPageAuthRequired(AppLayout, { returnTo: '/post/new' });