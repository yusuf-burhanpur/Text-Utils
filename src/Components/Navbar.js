import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
      </ul>
      <div className="btn-group mx-2" role="group" aria-label="First group">
    <button type="button" className="btn" style={{backgroundColor: "rgb(4, 91, 98)"}} value="rgb(4, 91, 98)" onClick={props.toggleHandler}></button>
    <button type="button" className="btn" style={{backgroundColor: "#1B4F72"}} value="#1B4F72" onClick={props.toggleHandler}></button>
    <button type="button" className="btn" style={{backgroundColor: "#0B5345"}} value="#0B5345" onClick={props.toggleHandler}></button>
    <button type="button" className="btn" style={{backgroundColor: "#212F3C"}} value="#212F3C" onClick={props.toggleHandler}></button>
    <button type="button" className="btn" style={{backgroundColor: "#784212"}} value="#784212" onClick={props.toggleHandler}></button>
    <button type="button" className="btn" style={{backgroundColor: "#424949"}} value="#424949" onClick={props.toggleHandler}></button>
    <button type="button" className="btn" style={{backgroundColor: "white"}} value="white" onClick={props.toggleHandler}></button>
  </div>
    </div>
    {/* <div className={`form-check form-switch text-${props.mode === "light" ? "black" : "white"}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleHandler} />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      <button className="badge rounded-pill bg-primary">blue</button> */}
  </div>
</nav>
     
    )
}

export default Navbar;

Navbar.propTypes = {
    title : PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title : "Set Title here",
    aboutText: "About"
}