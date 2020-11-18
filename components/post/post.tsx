import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import DeletePostButton from '../button-delete-post/delete-post'
import TextareaAutosize from 'react-textarea-autosize'
import axios from 'axios'
import { CancelChangePostBtn, ChangePostBtn, EditPostBtn, SectionPost, SectionText } from './styled'

type Props = {
  edit: boolean
  setEdit: (arg: boolean) => void
}

interface RootState {
  post: { id: number; title: string; body: string }
}

export default function Post({ edit, setEdit }: Props) {
  const post = useSelector((state: RootState) => state.post)
  const router = useRouter()
  const id = useSelector((state: RootState) => state.post.id)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    setTitle(post.title)
    setBody(post.body)
  }, [post])

  const upDatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await axios.put(`${process.env.API_URL}/posts/${id}`, {
      title: title,
      body: body,
    })
    setEdit(!edit)
    router.push(`/posts/${id}`)
  }

  return (
    <SectionPost>
      <form onSubmit={upDatePost}>
        {edit && <h1>{post.title}</h1>}
        {!edit && (
          <h1>
            <TextareaAutosize
              minRows={1}
              value={title}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const newValue = e.target.value
                setTitle(newValue)
              }}
            />
          </h1>
        )}

        <hr />
        <SectionText>
          {edit && (
            <>
              <p>{post.body}</p>
              <EditPostBtn
                onClick={() => {
                  setEdit(!edit)
                }}
              >
                Edit
              </EditPostBtn>
            </>
          )}
          {!edit && (
            <>
              <TextareaAutosize
                minRows={5}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value)
                }}
              />
              <DeletePostButton />
              <ChangePostBtn type="submit">Save changes</ChangePostBtn>
              <CancelChangePostBtn
                onClick={() => {
                  router.push(`/posts/${id}`)
                }}
              >
                Cancel
              </CancelChangePostBtn>
            </>
          )}
        </SectionText>
        <hr />
      </form>
    </SectionPost>
  )
}
