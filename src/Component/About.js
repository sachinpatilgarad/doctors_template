import React from "react";
import Service from "./Service";
import Department1 from "./Department1";
import Blog from "./Blog";
import Doctors from "./Doctors";
import Staff from "./Staff";
import Footer from "./Footer";

function About(){

    return(

        <>
            <div className="breadcrumb text-center">
                <div className="breadcrumb py-5">
                    <div className="py-5">
                      <h2 className="fw-bold">About</h2>
                      <a href={"/"} className="fw-bold text-dark">HOME</a><span className="fw-bold opacity-75" > / About</span>
                   </div>
                </div>
                </div>


                <div className="container pt-5 d-lg-flex">
                    <div className="col-12 col-lg-6">
                        <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/about.jpg"} className="rounded-3 col-12 col-lg-12"></img>
                    </div>
                    <div className="my-auto px-5">
                        <h1 className="fs-5 bg-light p-2 rounded-pill opacity-75 text-center col-6 col-lg-3">About Us</h1>
                        <h2 className="display-6 pt-3 pb-4 fw-bold">We Are Trusted The Best Certificate Healthcare.</h2>
                        <li className="nav-item text-dark"><h6 className="fw-bold"><i class="bi fs-4 dr-bull pe-2 bi-check-circle-fill"></i>Scientific Skills For getting a better result</h6></li>
                            <li className="nav-item text-dark"><h6 className="fw-bold"><i class="bi fs-4 dr-bull pe-2 bi-check-circle-fill"></i>Communication Skills to getting in touch</h6></li>
                            <li className="nav-item text-dark"><h6 className="fw-bold"><i class="bi fs-4 dr-bull pe-2 bi-check-circle-fill"></i>A Career Overview opportunity Available</h6></li>
                            <button type="button" className="online-btn my-5 col-lg-5 col-10 p-3 fw-bold">Book Appointment</button>
                    </div>
                </div>

                <Department1/>
                <Service/>
                <Doctors/>
                <Staff/>
                <Blog/>
                <Footer/>

        </>

    );

}

export default About;