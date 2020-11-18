import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { DeletePostBtn } from './styled/index'

interface RootState {
  post: {
    id: string
  }
}

export default function DeletePostButton() {
  const id = useSelector((state: RootState) => state.post.id)
  const router = useRouter()

  const deletePost = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await axios.delete(`${process.env.API_URL}/posts/${id}`)
    router.push(`/`)
  }

  return (
    <>
      <DeletePostBtn onClick={deletePost}>Delete Post</DeletePostBtn>
    </>
  )
}
