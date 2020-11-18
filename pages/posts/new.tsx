import MainLayOut from '../../components/main-layout/main-layout'
import Head from 'next/head'
import NewPost from '../../components/new-post/new-post'

export default function CreateNewPost() {
  return (
    <MainLayOut>
      <>
        <Head>
          <title>Blog | Create new post</title>
        </Head>

        <NewPost />
      </>
    </MainLayOut>
  )
}
