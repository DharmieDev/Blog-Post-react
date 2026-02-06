import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router"
import fetchPosts from "../api/Posts";

export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts 
  })
    
    if (isLoading) {
      return <div>Loading posts...</div>
    }
  if (error) {
    return <div>Error: {error}</div>
    }
  
  return (
    <div>
      <h1>Blogposts</h1>
      <div className="post-container">
        {data.map((post) => (
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
