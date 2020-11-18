import { wrapper } from '../../store/store'
import { getPost } from '../../store/post/action'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Comments from '../../components/comments/comments'
import Post from '../../components/post/post'
import MainLayOut from '../../components/main-layout/main-layout'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

interface RootState {
  post: { id: number; title: string; body: string }
}

export default function PostId() {
  const [edit, setEdit] = useState(true)
  const title = useSelector((state: RootState) => state.post.title)

  return (
    <MainLayOut>
      <>
        <Head>
          <title>Blog | {title}</title>
        </Head>

        <Post
          edit={edit}
          setEdit={(flag) => {
            setEdit(flag)
          }}
        />
        {edit && (
          <>
            <Comments />
          </>
        )}
      </>
    </MainLayOut>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }: any) => {
    await store.dispatch(getPost(query.id))
  }
)
