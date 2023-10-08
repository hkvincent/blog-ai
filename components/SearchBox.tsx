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
        if (debouncedQuery) {
            const controller = new AbortController();
            (async () => {
                getPosts({ searchTerm: debouncedQuery, searchAction: true });
            })();
            return () => controller.abort();
        } else if (selectedPostId) {
            if (typeof selectedPostId === 'string') {
                getPosts({ selectedPostId: selectedPostId, searchAction: true });
            } else if (typeof selectedPostId === 'object') {
                getPosts({ selectedPostId: selectedPostId[0], searchAction: true });
            }
        } else {
            getPosts({ searchAction: true });
        }
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
