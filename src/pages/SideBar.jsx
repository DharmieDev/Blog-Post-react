import { useState } from "react";
import {Menu} from '@boxicons/react';
import { NavLink } from "react-router";

export default function SideBar() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="sidebar">
      <h2>Blog Post app</h2>
      <nav>
        <Menu onClick={() => setOpen(!open)} className="menu"/>
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li className='nav'>
            <NavLink to="/" style={{ textDecoration: 'none' }}
             onClick={() => {setOpen(false)}}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

