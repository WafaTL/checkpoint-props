import React from 'react'


const Header = (props) => {
  return(
    <div className="header">
    <h1 >{props.fullName}</h1>

  <div className="navbar">
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="#">home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">about</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">porfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
     </ul>
    </div>
    </div>
  );
}

export default Header
