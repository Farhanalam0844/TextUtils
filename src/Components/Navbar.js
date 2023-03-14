import PropTypes from 'prop-types';
import React from 'react'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return(     
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-${props.modeg} bg-${props.modeg}`}>
 
  <a className="navbar-brand"href='#'>{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"href='#' >Home </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link "href='#about'>{props.about}</a>
      </li> */}
     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  <div className={`form-check form-switch text-${props.modeg &&props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.toggle}  type="checkbox" aria-checked='true' role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
  <div className={`form-check form-switch text-${props.modeg &&props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.toggleg}  type="checkbox" aria-checked='true'  role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.modeg==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault">Enable green mode</label>
</div>
  </div>
</nav>
);
}

Navbar.propTypes={
    title:   PropTypes.string.isRequired,
    about:  PropTypes.string
}
Navbar.defaultProps={
    title:'Enter title here',
    about:"About"
}