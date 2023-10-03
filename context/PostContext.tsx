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
  getPosts: ({ lastPostDate, getNewerPosts }: { lastPostDate: Date; getNewerPosts?: boolean }) => Promise<void>;
  noMorePosts: boolean;
  deletePost: (postId: string) => void;
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

  const setPostsFromSSR = useCallback((postsFromSSR: Post[] = []) => {
    dispatch({
      type: 'addPosts',
      posts: postsFromSSR,
    });
  }, []);

  const getPosts = useCallback(
    async ({ lastPostDate, getNewerPosts = false }: { lastPostDate: string | Date; getNewerPosts?: boolean }) => {
      const result = await fetch(`/api/getPosts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ lastPostDate, getNewerPosts }),
      });
      const json = await result.json();
      const postsResult: Post[] = json.posts || [];
      if (postsResult.length < 5) {
        setNoMorePosts(true);
      }
      dispatch({
        type: 'addPosts',
        posts: postsResult,
      });
    },
    []
  );


  return (
    <PostsContext.Provider
      value={{ posts, setPosts: setPostsFromSSR, getPosts, noMorePosts, deletePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};
