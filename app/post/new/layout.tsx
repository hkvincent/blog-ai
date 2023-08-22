import LoginInfo from '@/components/loginInfo';
import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <div className="bg-slate-800 px-2 ">
                    <div> first row</div>
                    <div>  second </div>
                    <div>  third </div>
                </div>
                <div className="px-4 flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
                    <div> list row</div>
                </div>
                <div className="bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 px-2 h-24">
                    <LoginInfo />
                </div>
            </div>
            <div> {children}</div>
        </div>
    );
};

export default AppLayout;