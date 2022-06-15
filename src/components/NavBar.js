import React from 'react';
import '../components/NavBar.css';
import {
    Link,
    NavLink
  } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='NavBar'>
        <h1>
            Jeff
        </h1>
        <ul >
            <li><Link style={{textDecoration:'none'}} to="/" className={({isActive})=>(isActive?'active':'inactive')}>Home</Link></li>
            <li> <Link  style={{textDecoration:'none'}} to="/contacts" className={({isActive})=>(isActive?'active':'inactive')}>Contacts</Link></li>
            <li><Link style={{textDecoration:'none'}} to="/about" className={({isActive})=>(isActive?'active':'inactive')}>About</Link></li>
        </ul>
    </div>
  )
};
