import React from "react";


function Service(){

    return(
        <>

<section className="service">
          <div className="container service-main pt-5 col- d-flex">
            <div className="col-lg-6 pt-5 col-12">
            <h1 className="fs-5 fw-bold py-3 col-lg-5 opacity-75 col-10 text-center rounded-pill bg-light">Why Choose Us?</h1>
            <h2 className="display-4 pt-4 fw-bold">Best Service And Expert Doctor Is Here.</h2>
            <div className="row pt-5">
              <h1 className="emer fs-5 ms-3 p-4 text-center rounded-pill col-lg-5 col-11">Emergency Cases</h1>
              <h2 className="emer fs-5 ms-3 p-4 text-center rounded-pill col-lg-4 col-11">Modern Clinic</h2>
              <h3 className="emer fs-5 ms-3 p-4 text-center rounded-pill col-lg-4 col-11">24/7 Support</h3>
              <h4 className="emer fs-5 ms-3 p-4 text-center rounded-pill col-lg-6 col-11"> Easy Online Appendment</h4>
              <h5 className="emer fs-5 ms-3 p-4 text-center rounded-pill col-lg-4 col-11">Expert Doctor’s </h5>
              <h6 className="emer fs-5 ms-3 p-4 text-center rounded-pill col-lg-4 col-11">100% Secure</h6>
            </div>
            </div>
            <div className="position-relative pt-5 d-none d-lg-block">
              <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/feature-image-1.jpg"} className="feature-1 col-8 rounded-pill"></img>
              <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/feature-image-2.jpg"} className="feature-1 mt-3  rounded-circle"></img>
              <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/feature-image-3.jpg"} className="feature-3 col-4 rounded-pill s position-relative"></img>
            </div>
          </div>
        </section>

        </>
    );

};

export default Service;