import React from "react";


function Blog(){

    return(

        <>
        
        <section className="py-5">
          <div className="py-5 text-center">
            <h1 className="fs-5 bg-light p-3 col-lg-3 col-7 mx-auto rounded-pill fw-bold">Our Post From Blog</h1>
            <h2 className="fs-1 fw-bold">Latest NewS & Article</h2>
          </div>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="blog rounded-3 p-4">
                <h1 className="p-3 fs-6 blog-1 fw-bold col-5 text-center rounded-3">Covid-19</h1>
               <div className="box">
                <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/grid-post-3.jpg"} className="rounded-4"></img>
              </div>
              <h2 className="fs-5 fw-bold pt-4 pb-2">What Mutations of SARS-CoV-2 are Causing Concern?</h2>
              <p className="fw-bold opacity-75">The idea that your mental state is interconnected with your physical state is a fundamental concept</p>
              <h3 className="fs-5 fw-bold">20 Jul 2023</h3>
            </div>
    </div>
    <div class="col-sm">
    <div className="blog p-4 rounded-3">
                <h1 className="p-3 fs-6 fw-bold blog-1 col-4 text-center rounded-3">Dental</h1>
                <div className="box">
                <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/grid-post-2.jpg"} className="rounded-4"></img>
                </div>
              <h2 className="fs-5 fw-bold pt-4 pb-2">How Do Your Emotions Affect Your Physical Health?</h2>
              <p className="fw-bold opacity-75">The idea that your mental state is interconnected with your physical state is a fundamental concept</p>
              <h3 className="fs-5 fw-bold">20 Jul 2023</h3>
            </div>
    </div>
    <div class="col-sm">
    <div className="blog rounded-3 p-4">
                <h1 className="p-3 fs-6 blog-1 fw-bold col-7 text-center rounded-3">Dermatologist</h1>
                <div className="box">
                <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/grid-post-1.jpg"} className="rounded-4"></img>
              </div>
              <h2 className="fs-5 fw-bold pt-4 pb-2">Using Flow Cytometry in Protein Engineering Detection</h2>
              <p className="fw-bold opacity-75">The idea that your mental state is interconnected with your physical state is a fundamental concept</p>
              <h3 className="fs-5 fw-bold">20 Jul 2023</h3>
            </div>
    </div>
  </div>
</div>
</section>
        
        </>

    );

};

export default Blog; 