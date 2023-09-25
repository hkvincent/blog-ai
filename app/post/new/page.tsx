import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Submitform from './submitform';

async function page() {



  return (
    <div>
      <h1>Post New</h1>
      <Submitform />
    </div>
  )
}

export default withPageAuthRequired(page, { returnTo: '/post/new' })