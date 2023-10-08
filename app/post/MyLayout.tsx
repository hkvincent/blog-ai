"use client"
import LoginInfo from '@/components/loginInfo';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faExpand, faTimes, faUpDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/logo';
import PageList from '@/app/post/PageList';
import SearchBox from '@/components/SearchBox';
import Link from 'next/link';

const MySidebar = ({ availableTokens, children }: { availableTokens: string, children: React.ReactNode }) => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="grid md:grid-cols-[320px,1fr] grid-cols-1 h-screen max-h-screen"  >
            <div className={`flex flex-col text-white overflow-hidden md:h-screen md:overflow-auto ${!isSidebarVisible ? 'hidden md:flex' : 'flex'}`}>
                <div className="bg-slate-800 px-2 flex flex-row md:flex-col">
                    <div className='min-h-max w-screen md:w-auto'>
                        <Logo />
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/post/new" className="btn mt-2 py-0 px-0 sm:py-2 sm:mt-0">New Post</Link>
                        <Link href="/post/token-topup" className="my-1 sm:my-4 text-center flex items-center gap-2 justify-center  whitespace-nowrap">
                            <FontAwesomeIcon icon={faCoins} className="text-yellow-500 align-middle w-6" size="sm" />
                            <span className="align-middle">{availableTokens} tokens available</span>
                        </Link>
                        <SearchBox />
                    </div>
                </div>
                <div className="pt-2  px-4 flex-1 max-h-[25vh] overflow-auto md:max-h-full md:overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
                    <PageList />
                </div>
                <div className="md:bg-cyan-800 flex items-center gap-2 px-2 h-24  md:border-t md:border-t-black/50 md:px-2 md:h-24 fixed top-4 left-0  md:static">
                    <LoginInfo />
                </div>
            </div>

            <button
                onClick={toggleSidebar} className="md:hidden p-2 w-8 h-8 flex items-center justify-center bg-transparent">
                {isSidebarVisible && <FontAwesomeIcon icon={faExpand} />}
                {!isSidebarVisible && <FontAwesomeIcon icon={faUpDown} />}
            </button>

            <div className="overflow-auto md:h-screen">
                {children}
            </div>
        </div>
    );
};


export default MySidebar;