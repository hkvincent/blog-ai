import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBrain } from '@fortawesome/free-solid-svg-icons';


const Logo = () => {

    return (
        <div className="text-2xl text-center py-4 font-heading">
            <span className='items-center justify-center'> BlogStandard
                <FontAwesomeIcon icon={faBrain} className="text-2xl ml-2 mb-1 text-slate-400  align-middle w-6 inline" size="sm"  /></span>
        </div>
    );

};

export default Logo;