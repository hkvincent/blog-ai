import React from 'react';
import SubmitAction from './SubmitAction';
import clientPromise from '@/lib/mongodb';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

const page = async () => {
    const client = await clientPromise;
    const { user }: { user: any } = (await getSession()) || { user: undefined };

    const db = client.db('BlogStandard');
    const userProfile = await db.collection('users').findOne({
        auth0Id: user.sub,
    });

    return (
        <>
            {userProfile?.availableTokens && userProfile.availableTokens >= 5 ? (
                <div className='text-green-500 flex h-full w-full flex-col justify-center items-center'>
                    <h1 className='animate-pulse'>Want to purchase more? click below</h1>
                    <SubmitAction />
                </div>
            ) : (
                <div className='text-green-500 flex h-full w-full flex-col justify-center items-center'>
                    <h1 className='animate-pulse'>Want to create a new post? Charge your token.</h1>
                    <SubmitAction />
                </div>
            )
            }
        </>
    );
};


export default page;