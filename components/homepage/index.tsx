import Link from 'next/link'
import { useSelector } from 'react-redux'
import { HeaderPostCard, PostCard, SectionPostCard } from './styled'

interface RootState {
  posts: { posts: { title: string; body: string; id: number }[] }
}

export default function HomePage() {
  const posts = useSelector((state: RootState) => state.posts.posts)

  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <PostCard key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <HeaderPostCard>
                  <img src={`https://picsum.photos/900/600?random=${index}`} alt="" />
                  <h2>{post.title}</h2>
                </HeaderPostCard>
                <SectionPostCard>
                  <p>{post.body && post.body.split(' ').splice(0, 20).join(' ') + ' ...'}</p>
                </SectionPostCard>
              </a>
            </Link>
          </PostCard>
        ))}
    </>
  )
}
