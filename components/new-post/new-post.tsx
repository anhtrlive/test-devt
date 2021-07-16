import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { CreateNewPostBtn, SectionPost, SectionText } from './styled'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const router = useRouter()

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault()
    await axios.post(`${process.env.API_URL}/posts`, {
      body,
      title,
    })
    router.push('/')
  }

  return (
    <SectionPost>
      <form onSubmit={createPost}>
        <h1>
          <TextareaAutosize
            placeholder={`Title`}
            minRows={1}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </h1>
        <SectionText>
          <TextareaAutosize
            placeholder={`Post..`}
            minRows={5}
            value={body}
            onChange={(e) => {
              setBody(e.target.value)
            }}
          />
          <CreateNewPostBtn type="submit">Create new post 2</CreateNewPostBtn>
        </SectionText>
      </form>
    </SectionPost>
  )
}
