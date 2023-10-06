"use client"
import PostsContext from '@/context/PostContext';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

const DeleteButton = ({ postId }: { postId: string }) => {

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const { deletePost } = useContext(PostsContext)!;

    const router = useRouter();

    const handleDeleteConfirm = async () => {
        try {
            const response = await fetch(`/api/deletePost`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ postId: postId }),
            });
            const json = await response.json();
            if (json.success) {
                deletePost(postId);
                router.replace(`/post/new`);
                router.refresh();
            }
        } catch (e) { }
    };
    return (
        <div>
            {!showDeleteConfirm && (
                <button
                    className="btn bg-red-600 hover:bg-red-700"
                    onClick={() => setShowDeleteConfirm(true)}
                >
                    Delete post
                </button>
            )} 
            {!!showDeleteConfirm && (
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
            )}
        </div>
    );
};

export default DeleteButton;