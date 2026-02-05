import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"


export default function DetailPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const[error, setError] = useState(null)
  
  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.oluwasetemi.dev/posts/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch post")
        }
        const result = await response.json()
        setPost(result) 
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
       }
    }
    fetchPost()
  }, [id])
  
  if (loading) {
    return <div>Loading Post...</div>
  }

  if (error) return <div>Error: {error}</div>
  
  if (!post) return <div>Post not found</div>

  
  return (
    <div className="detail-page">
      <h2>{post.title}</h2>
      <div className="details">
      <h4>{post.excerpt}</h4>
      <p>{post.content}</p>
      <span>{post.category}</span><br></br>
      <span>{post.tags}</span>
      </div>
    </div>
  )
}