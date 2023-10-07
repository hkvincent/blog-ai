import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBrain } from '@fortawesome/free-solid-svg-icons';


const Logo = () => {

    return (
        <div className="text-xl md:text-2xl text-center sm:py-4 font-heading">
            <span className=' flex flex-row items-center justify-center'>
                <p>BlogV</p>
                <FontAwesomeIcon icon={faBrain} className="text-2xl ml-1 text-slate-400  w-6 inline" size="sm" />
            </span>
        </div>
    );

};

export default Logo;