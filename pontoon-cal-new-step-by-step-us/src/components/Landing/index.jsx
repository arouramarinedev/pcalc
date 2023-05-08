import React from 'react'
import { useSelector } from 'react-redux'
import CostComparison from './CostComparison'
import HowTo from './HowTo'
import { DATA200, DATA200T, NDATA200, NDATA200T } from '../../Data';
import Products from './Products';
import Buttons from './Buttons';
import ScrollDownButton from './ScrollDownButton';
import ScrollToTop from "react-scroll-to-top";




function Landing() {

    const sqft = useSelector((state) => state.squareft.value);
    const condition = useSelector((state) => state.conditioner.value);

    // console.log(condition);

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      };


    return (
        <>
          <ScrollToTop color="#0070c0" />
            <div className="container calculator bg-light-subtle">
                <div className="row">
                    <div className="col">
                        <h2 className="text-danger fw-bold mt-3 text-center">Custom Pontoon Protection Kit <br />
                            for New Pontoons up to {Math.round(sqft)} Sq. Ft.</h2>
                    </div>
                </div>
                <div className="row ms-1">
                    <div className="col">
                        <h5 className="text-danger fw-bold mt-4">Benefits of Protecting New Pontoons with Alumetron and VS721:</h5>
                        <ul className="sblue fw-bold check-marks">
                            <li><span className="ms-1">Pontoons </span>Stay Clean and Shiny Year After Year</li>
                            <li><span className="ms-1">Pride </span>of Ownership. Your Boat is a Reflection of Your Personality.</li>
                            <li><span className="ms-1">3 Year </span>Transferable Factory Warranty.</li>
                            <li><span className="ms-1">Greater </span>Trade or Resale Value. Adding $5,000 to $10,000 is Common.</li>
                            <li><span className="ms-1">Better </span>Fuel Economy. Reduce Fuel Consumption Up to 20%.</li>
                            <li><span className="ms-1">Easier </span>Maintenance. Pontoons Can Stay Fouling Free All Summer.</li>
                            <li><span className="ms-1">Lasts </span>up to 10 Years. Save Money by Reducing Costly Annual Maintenance.</li>
                        </ul>
                    </div>
                    <div className="text-end d-flex align-items-center justify-content-end" onClick={scrollToBottom} >
                     <button type="button" className="btn btn-warning me-4 mb-1">
                        <i className="cursor-pointer bi bi-arrow-down-circle-fill fs-4 me-2"></i>
                        <span className="fs-5 me-3 cursor-pointer">Scroll Down</span>
                    </button>

                    </div>
                </div>
                <Products />
                <Buttons />
                <div className="text-end d-flex align-items-center justify-content-end" onClick={scrollToBottom} >
                     <button type="button" className="btn btn-light me-4 mt-3">
                        <i className="cursor-pointer bi bi-arrow-down-circle-fill fs-4 me-2"></i>
                        <span className="fs-5 me-3 cursor-pointer">Scroll Down</span>
                    </button>

                    </div>
                <CostComparison />
              
                <HowTo />
            </div>
        </>
    )
}

export default Landing