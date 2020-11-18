import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize'
import { Button, CommentsContent, CommentsTextAreaWrapper } from './styled'

interface RootStateComments {
  post: {
    comments: { body: string; id: number }[]
  }
}

interface RootStateID {
  post: {
    id: number
  }
}

export default function Comments() {
  const router = useRouter()
  const comments = useSelector((state: RootStateComments) => state.post.comments)
  const id = useSelector((state: RootStateID) => state.post.id)
  const [commentBody, setCommentBody] = useState('')

  const createComment = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await axios.post(`${process.env.API_URL}/comments`, {
      postId: id,
      body: commentBody,
    })
    setCommentBody('')
    router.push(`/posts/${id}`)
  }

  return (
    <CommentsContent>
      <form onSubmit={createComment}>
        <CommentsTextAreaWrapper>
          <TextareaAutosize
            minRows={2}
            placeholder={'Join the discussion…'}
            value={commentBody}
            onChange={(e) => {
              setCommentBody(e.target.value)
            }}
          />
          <Button type="submit">Post</Button>
        </CommentsTextAreaWrapper>
      </form>
      {comments && comments.map((comment, i) => <p key={comment.id}>{comment.body}</p>)}
    </CommentsContent>
  )
}
