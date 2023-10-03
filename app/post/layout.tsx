import LoginInfo from '@/components/loginInfo';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/logo/logo';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getAppProps } from '@/utils/getAppProps';
import PostItem from './PostItem';
import PageList from '@/components/pageList/PageList';


const AppLayout = async ({ children, params }: { children: any, params: { postId: string } }) => {


    console.log({ params });

    return (
        <div className="grid grid-cols-[320px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <PageList />
            </div>
            {children}
        </div>
    );
};

export default withPageAuthRequired(AppLayout, { returnTo: '/post/new' });