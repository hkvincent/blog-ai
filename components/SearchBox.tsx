"use client"
import PostsContext from '@/context/PostContext';
import { useParams } from 'next/navigation';
import React, { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';

const SearchBox = () => {
    const { getPosts, searchTerm, setSearchTerm } = useContext(PostsContext)!;
    const { postId: selectedPostId } = useParams();
    const [debouncedQuery] = useDebounce(searchTerm, 800);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPostsByQuery = async () => {
            if (debouncedQuery) {
                await getPosts({ searchTerm: debouncedQuery, searchAction: true });
            }
        };

        const fetchPostsById = () => {
            if (selectedPostId) {
                const id = typeof selectedPostId === 'object' ? selectedPostId[0] : selectedPostId;
                getPosts({ selectedPostId: id, searchAction: true });
            }
        };

        const fetchDefaultPosts = () => {
            getPosts({ searchAction: true });
        };

        if (debouncedQuery) {
            fetchPostsByQuery();
        } else if (selectedPostId) {
            fetchPostsById();
        } else {
            fetchDefaultPosts();
        }

        return () => controller.abort();
    }, [debouncedQuery, getPosts]);


    return (
        <div className="relative">
            <input
                type="text"
                className=" rounded w-full py-1 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;
