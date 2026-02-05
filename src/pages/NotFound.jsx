import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{textDecoration: 'none'}}>Go Home</Link>
    </div>
  )
}