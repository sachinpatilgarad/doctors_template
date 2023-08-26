import React from "react";
import Footer from "./Footer";

function Pages(){

    return(

        <>
             <div className="breadcrumb text-center">
                <div className="breadcrumb py-5">
                    <div className="py-5">
                      <h2 className="fw-bold">Pages</h2>
                      <a href={"/"} className="fw-bold text-dark">HOME</a><span className="fw-bold opacity-75" > / Pages</span>
                   </div>
                </div>
                </div>


                <section className="container">
                  <div className="d-lg-flex pt-5" >
                  <div className="col-12 col-lg-8">
                    <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/list-post-3.jpg"} className="col-12 col-lg-12"></img>
                    </div>
                    <div className="bg-light ms-5 p-5 text-center ">
                        <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/07/about-widget.jpg"} className="rounded-circle"></img>
                        <h3 className="py-3 fw-bold">Dr. Allison Katrina</h3>
                        <p>Hi! beautiful people. I`m an author of this blog. Read our post - stay with us</p>
                        <button type="button" className="online-btn my-2 col-lg-6 p-3 fw-bold">Get In Touch</button>
                    </div>
                  </div>
                    <div className="page-main py-3 d-flex -4">
                    <h6 className="pe-5"><span><i class="bi px-2 bi-pencil-square"></i></span> BY: ADMIN</h6>
                    <h6 className="pe-5"><span><i class="bi px-2 bi-chat-left-text"></i></span> COMMENTS (0)</h6>
                    <h6 className=""><span><i class="bi px-2 bi-chat-left-text"></i></span> JULY 20, 2023</h6>
                    </div> 

                      <div className="col- pt-4">
                        <p className="py-3">The idea that your mental state is interconnected with your physical state is a fundamental concept in various fields, including psychology, medicine, and philosophy. This interconnectedness is often referred to as the mind-body connection. It suggests that the mind and body are not separate entities but rather deeply intertwined, with each influencing the other.</p>
                        <p className="py-3">Placebo and Nocebo Effects: The placebo effect occurs when a person experiences a positive improvement in their condition after receiving a treatment with no active medical properties simply because they believe it will work. Conversely, the nocebo effect is when a person experiences negative side effects or worsening of symptoms.</p>
                      </div>
                      <div className="page-mak col-  pt-4">
                        <div className="p-5">
                            <p className="fs-4 text-danger">"Some of the more common physical difficulties associated with mental health include"</p>
                            <h3 className="fw-bold opacity-75">-Dotus Author</h3>
                        </div>
                      </div>
                        <p className="py-4">Emotional and Physical Well-being: There is evidence to suggest that emotional well-being is linked to better physical health and longevity. Positive emotions and a healthy mental state can lead to better lifestyle choices and adherence to medical treatments. This demonstrates how mental and emotional states can impact physical health.</p>
                        <p className="pb-5">Overall, the mind-body connection highlights the complex and dynamic relationship between our mental and physical states. It emphasizes the importance of addressing both aspects of health to achieve overall well-being. Integrative approaches that consider both psychological and physiological factors have gained traction in modern medicine and holistic health practices.</p>
                </section>

        <Footer/>
            
        </>

    );

}

export default Pages;