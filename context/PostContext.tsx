"use client";
import { useRouter } from 'next/router';
import React, { useCallback, useReducer, useState, ReactNode } from 'react';

// Define the shape of a post
interface Post {
  _id: string;
  // Add other properties as needed
}

// Define the shape of the context
interface PostsContextProps {
  posts: Post[];
  setPosts: (postsFromSSR?: Post[]) => void;
  getPosts: ({ lastPostId, getNewerPosts }: { lastPostId: string; getNewerPosts?: boolean }) => Promise<void>;
  noMorePosts: boolean;
  deletePost: (postId: string) => void;
  clearPosts: () => void;
  setHasMorePosts: (hasMore: boolean) => void;
}

const PostsContext = React.createContext<PostsContextProps | undefined>(undefined);

export default PostsContext;

function postsReducer(state: Post[], action: any): Post[] {
  switch (action.type) {
    case 'addPosts': {
      const newPosts = [...state];
      action.posts.forEach((post: Post) => {
        const exists = newPosts.find((p) => p._id === post._id);
        if (!exists) {
          newPosts.push(post);
        }
      });
      return newPosts;
    }
    case 'deletePost': {
      const newPosts = state.filter((post) => post._id !== action.postId);
      return newPosts;
    }
    case 'clearPosts':
      return [];
    default:
      return state;
  }
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, []);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const deletePost = useCallback((postId: string) => {
    dispatch({
      type: 'deletePost',
      postId,
    });
  }, []);

  const setPosts = useCallback((postsFromSSR: Post[] = []) => {
    dispatch({
      type: 'addPosts',
      posts: postsFromSSR,
    });
  }, []);

  const clearPosts = useCallback(() => {
    dispatch({
      type: 'clearPosts',
    });
  }, []);

  const getPosts = useCallback(
    async ({ lastPostId, getNewerPosts = false }: { lastPostId: string; getNewerPosts?: boolean }) => {
      const result = await fetch(`/api/getPosts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ lastPostId, getNewerPosts }),
      });
      const json = await result.json();
      const postsResult: Post[] = json.posts || [];
      if (!json.hasMore) {
        console.log('setHasMorePosts', json.hasMore);
        setNoMorePosts(true);
      }
      dispatch({
        type: 'addPosts',
        posts: postsResult,
      });
    },
    []
  );

  const setHasMorePosts = useCallback((hasMore: boolean) => {

    setNoMorePosts(!hasMore);
  }, []);


  return (
    <PostsContext.Provider
      value={{ posts, setPosts, getPosts, noMorePosts, deletePost, clearPosts, setHasMorePosts }}
    >
      {children}
    </PostsContext.Provider>
  );
};
