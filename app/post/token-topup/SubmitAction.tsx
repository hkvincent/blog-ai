"use client";
import React from 'react';

const SubmitAction = () => {
    const handleClick = async () => {
        const result = await fetch(`/api/addTokens`, {
            method: 'POST',
        });
        const json = await result.json();
        window.location.href = json.session.url;
    };

    return (
        <div>
            <button className="btn w-60" onClick={handleClick}>
                Add tokens
            </button>
        </div>
    );
};

export default SubmitAction;