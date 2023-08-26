import React from "react";


function Doctors(){

    return(

        <>
        
          <section>
        <div className=" container  py-5 text-center">
          <h1 className="fs-5 fw-bold mt-5 bg-light opacity-75 col-lg-4 p-3 rounded-pill mx-auto">Meet Great Doctor’s</h1>
          <h2 className="display-4 py-3 fw-bold">High Qualified Doctor’s</h2>
          <div className="row col- py-5">
          <div className="Doctors col-lg-3 col-11 mx-auto pt-5 pb-5">
            <div className="box">
            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/Dr.-Raquel-Riley.jpg"} className="doctor-img rounded-3"></img>
            <div className="content"><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-facebook"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-twitter"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-linkedin"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-instagram"></i></div>
            </div>
            <h1 className="fs-4 fw-bold pt-4">Dr. Raquel Riley</h1>
            <h2 className="fs-6 opacity-75">Restorative Dentist</h2>
          </div>
          <div className="Doctors col-lg-3 col-11 mx-auto pt-5 pb-5">
          <div className="box">
            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/Dr.-Allison-Katrina.jpg"} className="doctor-img rounded-3"></img>
            <div className="content"><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-facebook"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-twitter"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-linkedin"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-instagram"></i></div>
           </div>
            <h1 className="fs-4 fw-bold pt-4">Dr. Allison Katrina</h1>
            <h2 className="fs-6 opacity-75">Cosmetic Surgeon</h2>
          </div>
          <div className="Doctors col-lg-3 col-11 mx-auto pt-5 pb-5">
          <div className="box">
            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/Dr.-Belinda-Walters.jpg"} className="doctor-img rounded-3"></img>
            <div className="content"><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-facebook"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-twitter"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-linkedin"></i><i class="bi icon-doctor mx-1 fs-4 p-2 pt-1 bi-instagram"></i></div>
            </div>
            <h1 className="fs-4 fw-bold pt-4">Dr. Belinda Walters</h1>
            <h2 className="fs-6 opacity-75">Cancer Specialist</h2>
          </div>
          </div>
        </div>
        </section>

        
        </>

    );

};


export default Doctors;