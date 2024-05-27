import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div id='NavBar'>
      <nav>
        <ol>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/hobbies'>Hobbies</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

