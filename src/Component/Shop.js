import React from "react";
import Footer from "./Footer";

function Shop(){

    return(

        <>  
              <div className="breadcrumb text-center">
                <div className="breadcrumb py-5">
                    <div className="py-5">
                      <h2 className="fw-bold">Shop Page</h2>
                      <a href={"/"} className="fw-bold text-dark">HOME</a><span className="fw-bold opacity-75" > / Shop</span>
                   </div>
                </div>
                </div>


                <div className="container py-5 d-lg-flex col-lg-10 col-12">
                    <div className="py-5 container-fluid col-lg-6 col-12">
                        <img src={"https://wpolive.com/dotus/wp-content/uploads/2023/01/Digital-Oximeter.jpg"} className="col-12"></img>
                    </div>
                    <div className="px-lg-5 py-lg-5">
                        <h1 className="fw-bold py-4"><s className="opacity-50">$295.00</s> <span className="gb fw-bold">$249.00</span></h1>
                        <p>Emotional and Physical Well-being: There is evidence to suggest that emotional well-being is linked to better physical health and longevity. Positive emotions and a healthy mental state can lead to better lifestyle choices and adherence to medical treatments.</p>
                        <p>Overall, the mind-body connection highlights the complex and dynamic relationship between our mental and physical states. It emphasizes the importance of addressing both aspects of health to achieve overall well-being. Integrative medicine and holistic health practices.</p>
                        <li className="fw-bold gb"><span className="text-dark">Prescriptions & treatment plans.</span></li>
                        <li className="fw-bold gb"><span className="text-dark">Always available for emergency service.</span></li>
                        <li className="fw-bold gb"><span className="text-dark">Low visit and even less with insurance.</span></li>
                        <input type="number" placeholder="1" className="col-lg-2 p-2 my-4"></input>
                        <button type="button" className="online-btn p-2 ms-2">Add to card</button>
                        <h2 className="fs-6 fw-bold">Category: <span className="fs-6 gb fw-bold">Hospital</span></h2> 
                        <h3 className="fs-6 fw-bold">Tag: <span className="fs-6 gb fw-bold">Book</span></h3>
                    </div>
                </div>

            <Footer/>

        </>

    );

}

export default Shop;