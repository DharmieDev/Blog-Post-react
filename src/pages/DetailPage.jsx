import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { fetchPostById } from "../api/Posts"


export default function DetailPage() {
  const { id } = useParams()
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: fetchPostById,
    enabled: !!id
  })
  
  if (isLoading) {
    return <div>Loading Post...</div>
  }

  if (error) return <div>Error: {error.message}</div>
  
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