import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router"

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
    
    useEffect(() => {
      async function fetchPosts() {
        try {
          setLoading(true)
          const response = await fetch('https://api.oluwasetemi.dev/posts')
          if (!response.ok) {
            throw new Error('Failed to fetch posts')
          }
          const result = await response.json()
          setPosts(result.data)
        } catch (error) {
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
      
      fetchPosts()
    }, [])
    
    if (loading) {
      return <div>Loading posts...</div>
    }
  if (error) {
    return <div>Error: {error}</div>
    }
  
  return (
    <div>
      <h1>Blogposts</h1>
      <div className="post-container">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} style={{
            textDecoration: 'none',
          }}>
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
