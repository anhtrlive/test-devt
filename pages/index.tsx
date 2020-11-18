// import { NextPageContext } from 'next';
import Head from 'next/head'
import HomePage from '../components/homepage'
import MainLayOut from '../components/main-layout/main-layout'
import { getAllPosts } from '../store/homepage/action'
import { wrapper } from '../store/store'

export default function Index() {
  return (
    <MainLayOut>
      <>
        <Head>
          <title>Blog</title>
        </Head>

        <HomePage />
      </>
    </MainLayOut>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(getAllPosts())
})
