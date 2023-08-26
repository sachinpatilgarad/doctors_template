import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";



function Navigation(){

    return(
        <>
            <section className="">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
        <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/logo.svg"} className=""></img> 
          <button class="navbar-toggler mob-btn" type="button " data-bs-toggle="collapse" data-bs-target="#myNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse fw-bold navbar-collapse" id="myNav">
            <ul class="navbar-nav mx-auto ps-4 ps-lg-0 mb-2 mb-lg-0">
            <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Department" className="nav-link">Department</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Pages" className="nav-link">Pages</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Shop" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                </ul>   
          </div>
          <div className="d-none d-lg-block">
                <button type="button" className="online-btn p-3 fw-bold rounded-3">Book Now</button> 
            </div>
        </div>
      </nav>
            </section>
        </>
    );

}

export default Navigation;