import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="container mx-auto mt-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg mb-8">Thank you for your purchase.</p>
      <Link href="/post/new">
        <a className="text-blue-500 underline">Go back to New Post</a>
      </Link>
    </div>
  );
};

export default Page;
