import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const user = false;
  return (
    <div className='navbar'>
      <span className='logo'>
        <Link to="/">Social Login</Link>
      </span>

      <ul className='list'>
        {user ? (
          <>
            <li className="listItem">
              <img className='profileImg' src="https://lh3.googleusercontent.com/ogw/AGvuzYYyKINbf52eiUM-84F3vPfqa78jteDWJRwmS7YUHQ=s32-c-mo" alt="" />
            </li>
            <li className="listItem userName">Alex Bezerra</li>
            <li className="listItem">
              <Link className="link" to="login">Sair</Link>
            </li>
          </>
        ) : (
            <Link className="link" to="login">Login</Link>
              )}
      </ul>

    </div>
  )
}

export default Navbar