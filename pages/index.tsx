import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'carbon-components-react';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to my personal blog</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default Home
