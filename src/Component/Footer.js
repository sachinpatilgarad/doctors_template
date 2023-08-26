import React from "react";



function Footer(){

    return(

        <>
           
               <section className="footer">
        <div className="p-5 d-lg-flex mx-auto container">
          <div className="col-lg-4">
            <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/logo.svg"} className="py-4"></img>
            <p className="col-lg-10">If you're looking for a medical theme there are several popular and important medical themes that you could consider Dotus is number #1 Theme.</p>
            <i class="bi p-3 fs-3 gb bi-facebook"></i><i class="bi fs-3 gb p-3 bi-twitter"></i><i class="bi fs-3 gb p-4 bi-linkedin"></i><i class="bi fs-3 gb p-3 bi-instagram"></i>
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
           <h6 className="col-8 opacity-75"> <i class="bi gb px-3 bi-geo-alt"></i>7 Green Lake </h6>
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

};

export default Footer;