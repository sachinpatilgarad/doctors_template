import React from "react";


function Staff(){

    return(

        <>
        
        <section className="staff">
       <div className="container  p-5 d-lg-flex">
       <div className="col-lg-3  my-auto">
       <h1 className="fs-5 p-3 opacity-75 fw-bold bg-light text-center rounded-pill col-7">Testimonial</h1>
        <h2 className="fs-1 py-3 fw-bold">6,000<span>+</span></h2>
        <h3 className="fs-2 fw-bold">Patient’s all around the world.</h3>
       </div>
      <div className="col-3 d-none d-lg-block position-relative">  
        <img src="https://wpolive.com/dotus/wp-content/uploads/2023/07/line-1.png" className="position-absolute col-7"></img>
        <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/Allan-Roberson.jpg"} className="position-absolute pt-5 rounded-circle col-8"></img>
     </div>
        <div className="my-auto">
        <p className="fs-5 fw-bold opacity-75">The staff was attentive and professional, ensuring a comfortable experience. The doctor's expertise and compassion were evident. The facility was clean and well-equipped.</p>
       <div>
       <h2 className="fw-bold">Allan Roberson</h2>
        <h5 className="fw-bold opacity-75">Medicine Doctor</h5>
        <button>♦</button>
       </div>
        </div>
       </div>
       </section>

        </>

    );

};


export default Staff;