import React from "react";
import Department1 from "./Department1";

function Home(){
    // document.getElementById("lol").style.backgroundColor="red"
    return(

        <>
            
            <section className="hero">
                <div className="container hero-main">
                    <div className="d-lg-flex">
                        <div className="col-lg-7 col-12">
                          <h5 className="service-head text-center opacity-75 fw-bold col-12 col-lg-6 bg-white p-1  pb-3 rounded-pill"><span><i class="bi bg-white rounded-pi fs-1 bi-dot"></i></span>24/07 Emergency Service</h5>
                          <h1 className="display-1 col- pt-3 pb-4 fw-bold">Doctor always ready for service.</h1>
                            <li className="nav-item text-dark"><h6><i class="bi fs-4 dr-bull px-3 bi-check-circle-fill"></i>Prescriptions & treatment plans.</h6></li>
                            <li className="nav-item text-dark"><h6><i class="bi fs-4 dr-bull px-3 bi-check-circle-fill"></i>Always available for emergency service.</h6></li>
                            <li className="nav-item text-dark"><h6><i class="bi fs-4 dr-bull px-3 bi-check-circle-fill"></i>Low visit and even less with insurance.</h6></li>
                            <button type="button" className="online-btn my-5 col-lg-5 col-8 p-3 fw-bold">Online Appointment</button>
                        </div>
                        <div className="position-relative d-none d-lg-block ps-3">
                            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/hero-image.jpg"} className="rounded-pill img-1 position-absolute"></img>
                            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/brain.svg"} className="brain-hero p-5 bg-light position-absolute rounded-pill"></img>
                        </div>
                    </div>
                </div>
             </section>
       
       
       
            <section className="star py-4 text-dark ">
                <div className="black col-1  col-lg-12 col-md-12 d-flex">
                    <h1 className="ps-5 fw-bold">Helth<i class="bi px-5 fs-1 bi-star"></i></h1>
                    <h1 className="fw-bold">Doctors<i class="bi px-5 fs-1 bi-star"></i></h1>
                    {/* <h1 className="fw-bold">Hospital<i class="bi px-5 fs-1 bi-star"></i></h1> */}
                    <h1 className="fw-bold">Medical<i class="bi px-5 fs-1 bi-star"></i></h1>
                    <h1 className="fw-bold">Patient<i class="bi px-5 fs-1 bi-star"></i></h1>
                </div>
            </section>


        <Department1/>
           



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




        <section>
        <div className=" container  py-5 text-center">
          <h1 className="fs-5 fw-bold mt-5 bg-light opacity-75 col-lg-4 p-3 rounded-pill mx-auto">Meet Great Doctor’s</h1>
          <h2 className="display-4 py-3 fw-bold">High Qualified Doctor’s</h2>
          <div className="row py-5">
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




       <section className="staff">
       <div className="container  p-5 d-lg-flex">
       <div className="col-lg-3  my-auto">
       <h1 className="fs-5 p-3 opacity-75 fw-bold bg-light text-center rounded-pill col-8">Testimonial</h1>
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


        <section className="py-5">
          <div className="Appointment container p-5 d-lg-flex my-5">
          <div className="">
            <h1 className="fs-5 bg-light p-3 col-lg-6 text-center rounded-pill">Appointment Now</h1>
            <h2 className="display-5 text-white col-lg-8 fw-bold">Appointment for free online consultation.</h2>
          </div>
          <div className="col-1"><img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/line-1.png"} className="w-100"></img>
        </div>
          <div className="row">
          <input type="text" placeholder="Full Name" className="col-lg-5 p-2 my-2"></input>
          <input type="email" placeholder="Email" className="mx-2 p-2 col-lg-5 my-2"></input>
          <input type="number" placeholder="Phone Number" className="col-lg-5 p-2 my-2"></input>
          <select id="" name="" class="input" className="mx-1 p-2 col-lg-2 my-2">
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



        <section className="footer">
        <div className="p-5 d-lg-flex mx-auto container">
          <div className="col-lg-4">
            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/logo.svg"} className="py-4"></img>
            <p className="col-lg-10">If you're looking for a medical theme there are several popular and important medical themes that you could consider Dotus is number #1 Theme.</p>
            <i class="bi p-3 gb fs-3 bi-facebook"></i><i class="bi gb fs-3 p-3 bi-twitter"></i><i class="bi gb fs-3 p-4 bi-linkedin"></i><i class="bi fs-3 gb p-3 bi-instagram"></i>
          </div>
          <div className="col-lg-2">
            <h3 className="py-4">Useful Link</h3>
            <li className="gb px-3"><span className="text-dark">About Us</span></li>
            <li className="gb px-3"><span className="text-dark">Services</span></li>
            <li className="gb px-3"><span className="text-dark">Department</span></li>
            <li className="gb px-3"><span className="text-dark">Contact</span></li>
            <li className="gb px-3"><span className="text-dark">Latest News</span></li>
          </div>
          <div className="col-lg-3">
            <h3 className="py-4">Our Address</h3>
            <p className="col-lg-10">Would you have any enquiries. Please feel free to contact us</p>
           <h6 className="col-8 opacity-75"> <i class="bi gb px-3 bi-geo-alt"></i>7 Green Lake</h6>
            <h6 className="opacity-75"><i class="bi px-3 gb bi-phone"></i>+1 800 123 456 789</h6>
            <h6 className="opacity-75"><i class="bi px-3 gb bi-envelope"></i>contact@dotus.com</h6>
          </div>
          <div className="col-lg-3">
            <h3 className="py-4">Newsletter</h3>
            <p className="col-lg-11">You will be notified when somthing new will be appear.</p>
            <input type="text" placeholder="Email Address *" className="p-3 col-11"></input>
          </div>
        </div>
            <div className="c text-center opacity-75">
              <h6 className="py-3">© Copyright 2023 | Dotus - Medical WordPress Theme | All right reserved.</h6>
            </div>
        </section>




        </>

    );

}

export default Home;