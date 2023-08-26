import React from "react";
import Department1 from "./Department1";
import Doctors from "./Doctors";
import Footer from "./Footer";

function Department(){

    return(

        <>
              <div className="breadcrumb text-center">
                <div className="breadcrumb py-5">
                    <div className="py-5">
                      <h2 className="fw-bold">Department</h2>
                      <a href={"/"} className="fw-bold text-dark">HOME</a><span className="fw-bold opacity-75" > / Department</span>
                   </div>
                </div>
                </div>

                    <Department1/>
                    <Doctors/>
                    <Footer/>


        </>

    );

}

export default Department;