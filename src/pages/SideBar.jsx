import { NavLink } from "react-router";

export default function SideBar() {
  
  return (
    <div className="sidebar">
      <h2>Blog Post app</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={{textDecoration: 'none'}}>Home</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}