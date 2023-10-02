import React from 'react'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Submitform from './Submitform';
import clientPromise from '@/lib/mongodb';
import { redirect } from 'next/navigation';

async function page() {
  const client = await clientPromise;
  const { user }: { user: any } = (await getSession()) || { user: undefined };
  // console.log(user);
  //console.log(params.postId);
  const db = client.db('BlogStandard');
  const userProfile = await db.collection('users').findOne({
    auth0Id: user.sub,
  });

  if (!userProfile?.availableTokens || userProfile.availableTokens < 5) {
    redirect('/post/token-topup');
  }

  return (
    <div className="h-full overflow-hidden">
      <Submitform />
    </div>
  )
}

export default withPageAuthRequired(page, { returnTo: '/token-topup' })