import React from "react";


function Appointment(){

    return(

        <>

    <section>
          <div className="Appointment container p-5 d-lg-flex my-5">
          <div className="">
            <h1 className="fs-5 bg-light p-3 col-lg-6 text-center rounded-pill">Appointment Now</h1>
            <h2 className="display-5 text-white col-lg-8 fw-bold">Appointment for free online consultation.</h2>
          </div>
          <div className="col-1"><img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/line-1.png"} className="w-100"></img>
        </div>
          <div className="row">
          <input type="text" placeholder="Full Name" className="col-lg-5 p-2 my-2"></input>
          <input type="email" placeholder="Email" className="mx-lg-2 p-2 col-lg-5 my-2"></input>
          <input type="number" placeholder="Phone Number" className="col-lg-5 p-2 my-2"></input>
          <select id="" name="" class="input" className="mx-lg-1 p-2 col-lg-2 my-2">
               <option value="-1" selected>Age</option>
               <option value="1">18</option>
               <option value="2">19</option>
               <option value="3">20</option>
               <option value="4">21</option>
               <option value="5">22</option>
               <option value="6">23</option>
          </select>
          <select id="" name="" class="input" className="col-lg-3 p-2 my-2">
               <option value="-1" selected>Gender</option>
               <option value="1">Male</option>
               <option value="2">Female</option>
          </select>
          <select id="" name="" class="input" className="col-lg-10 p-2 my-2">
               <option value="-1" selected>Choose Department</option>
               <option value="1">Biotechnology</option>
               <option value="2">Facility Services & Supplies</option>
               <option value="3">Government & Education</option>
               <option value="4">Healthcare Providers</option>
               <option value="5">Management Consulting</option>
          </select>
          <button type="button" className="online-btn my-2 col-lg-5 p-3 fw-bold">Book Appointment</button>
          </div>
          </div>
        </section>

        </>

    );

};

export default Appointment;