import React from 'react'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import { redirect } from 'next/navigation';
export default async function page({ params }: { params: { postId: string } }) {

  const client = await clientPromise;
  const { user }: { user: any } = (await getSession()) || { user: undefined };
  console.log(user);
  console.log(params.postId);
  const db = client.db('BlogStandard');
  const userProfile = await db.collection('users').findOne({
    auth0Id: user.sub,
  });

  const post = await db.collection('posts').findOne({
    _id: new ObjectId(params.postId),
    userId: userProfile?._id,
  });

  console.log(post);

  if (!post) {
    redirect('/post/new');
  }

  return (
    <div className="overflow-auto h-full">
      <div className="max-w-screen-sm mx-auto">
        <div className="text-sm font-bold mt-6 p-2 bg-stone-200 rounded-sm">
          SEO title and meta description
        </div>
        <div className="p-4 my-2 border border-stone-200 rounded-md">
          <div className="text-blue-600 text-2xl font-bold">{post.title}</div>
          <div className="mt-2">{post.metaDescription}</div>
        </div>
        <div className="text-sm font-bold mt-6 p-2 bg-stone-200 rounded-sm">
          Keywords
        </div>
        <div className="flex flex-wrap pt-2 gap-1">
          {post.keywords.split(',').map((keyword: string, i: number) => (
            <div key={i} className="p-2 rounded-full bg-slate-800 text-white">
              <FontAwesomeIcon icon={faHashtag} /> {keyword}
            </div>
          ))}
        </div>
        <div className="text-sm font-bold mt-6 p-2 bg-stone-200 rounded-sm">
          Blog post
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.postContent || '' }} />
        <div className="my-4">
          {/* {!showDeleteConfirm && (
            <button
              className="btn bg-red-600 hover:bg-red-700"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete post
            </button>
          )} */}
          {/* {!!showDeleteConfirm && (
            <div>
              <p className="p-2 bg-red-300 text-center">
                Are you sure you want to delete this post? This action is
                irreversible
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="btn bg-stone-600 hover:bg-stone-700"
                >
                  cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="btn bg-red-600 hover:bg-red-700"
                >
                  confirm delete
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}
