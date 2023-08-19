'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'
import Image from 'next/image';


export default function Header() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div>
            {user ? (
                <div>
                    <Image src={user.picture ?? ""} alt={user.name ?? ""} width="100" height="100" />
                    Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
                </div>
            ) : (
                <a href="/api/auth/login">Login</a>
            )}
        </div>
    )
}
