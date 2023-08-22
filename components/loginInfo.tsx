'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function LoginInfo() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <>
            {user ? (
                <>
                    <div className="min-w-[50px]" >
                        <Image src={user.picture ?? ""} alt={user.name ?? ""} width="50" height="50"
                            className="rounded-full" />
                    </div>
                    <div className="flex-1">
                        <div className="font-bold">{user.name} </div>
                        <div>
                            <a className="text-sm" href="/api/auth/logout">
                                Logout
                            </a>
                        </div>
                    </div>

                </>
            ) : (
                <a href="/api/auth/login">Login</a>
            )}
        </>
    )
}
