"use client"
import React from 'react';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Submitform = () => {
    const router = useRouter();
    const [topic, setTopic] = useState('');
    const [keywords, setKeywords] = useState('');
    const [generating, setGenerating] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGenerating(true);
        console.log('SUBMITTING: ', topic, keywords);
        try {
            const response = await fetch(`/api/generatePost`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ topic, keywords }),
            });
            const json = await response.json();
            console.log('RESULT: ', json);
            if (json?.postId) {
                router.push(`/post/${json.postId}`);
            }
        } catch (e) {
            setGenerating(false);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200"
            >
                <div>
                    <label>
                        <strong>Generate a blog post on the topic of:</strong>
                    </label>
                    <textarea
                        className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        maxLength={80}
                    />
                </div>
                <div>
                    <label>
                        <strong>Targeting the following keywords:</strong>
                    </label>
                    <textarea
                        className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        maxLength={80}
                    />
                    <small className="block mb-2">
                        Separate keywords with a comma
                    </small>
                </div>
                <button
                    type="submit"
                    className="btn"
                    disabled={!topic.trim() || !keywords.trim()}
                >
                    Generate
                </button>
            </form>
        </div>
    );
};

export default Submitform;