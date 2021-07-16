import Link from 'next/link'
import Head from 'next/head'
import { Main, Navigation } from './styled'
import React from 'react'

type Props = {
  children: JSX.Element
}

export default function MainLayOut({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="description" content="description" />
        <meta name="keywords" content="keywords" />
        <meta name="author" content="" />
        <meta name="viewport" content="" />
      </Head>
      <Navigation>
        <ul>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/new">Create new post 2222222</Link>
          </li>
        </ul>
      </Navigation>
      <Main>{children}</Main>
    </>
  )
}
