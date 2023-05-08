import newImg from '../../img/pontoon-calculator/new.jpg';
import newImg2 from '../../img/pontoon-calculator/new-1.jpg';
import oldImg from '../../img/before-un.jpg';
import oldImg2 from '../../img/before-un-2.jpg';

import React from 'react'
import StepOne from '../StepOne';
import Popup from './Popup';

function New() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 border rounded-4 border-dark-subtle bg-white pt-2 mb-3">
                        <h4 className="fw-bold sblue"><em>
                            Protect the Factory Finish on your Pontoons for up to 10 years
                        </em>
                        </h4>
                        <h5 className="text-danger fw-bold"><em><span className="mx-1">✓ </span>Get a 3 Year Factory Warranty!</em></h5>
                        <div className="row mt-4">
                            <div className="col">
                                <p className="sblue"><span className="text-danger"><b><em>Protected</em></b></span>
                                    <span><br />New Pontoons protected with <b>Alumetron</b> and <b>VS721</b></span>
                                </p>
                                <div className="row">
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                                        <Popup 
                                            imagelink= {newImg}
                                            alttext = "new pontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal1"
                                            mid = "exampleModal1"
                                            
                                        />
                                       
                                        {/* <a href={newImg} rel="noreferrer" target="_blank"><img className="img-fluid" src={newImg} alt="new pontoon boat protected with Alumetron" width={260} /></a> */}
                                        <p className="text-center sblue">Click to enlarge</p>
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                                        <Popup 
                                            imagelink = {newImg2}
                                            alttext = "new pontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal2"
                                            mid = "exampleModal2"
                                        />
                                        {/* <a href={newImg2} rel="noreferrer" target="_blank"><img className="img-fluid" src={newImg2} alt="new pontoon boat protected with Alumetron" width={260} /></a> */}
                                        <p className="text-center sblue">Click to enlarge</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="sblue"><span className="text-danger"><em><b>Unprotected</b></em></span>
                                    <span><br />Pontoons after 1 season in a fresh water lake</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                            <Popup 
                                            imagelink = {oldImg}
                                            alttext = "Unpontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal3"
                                            mid = "exampleModal3"
                                        />
                                {/* <a href={oldImg} rel="noreferrer" target="_blank"><img className="img-fluid" src={oldImg} alt="Unpontoon boat protected with Alumetron" width={260} /></a> */}
                                <p className="text-center sblue">Click to enlarge</p>
                            </div>
                            <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                            <Popup 
                                            imagelink = {oldImg2}
                                            alttext = "Unpontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal4"
                                            mid = "exampleModal4"
                                        />
                                {/* <a href={oldImg2} rel="noreferrer" target="_blank"><img className="img-fluid" src={oldImg2} alt="Unpontoon boat protected with Alumetron" width={260} /></a> */}
                                <p className="text-center sblue">Click to enlarge</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <p className="sblue">The Best Time to Protect your Aluminum Pontoons is when your boat is Brand New; before it goes in the water. It’s easier, faster and less expensive than cleaning and restoring the finish after the fact. </p>
                                <p className="sblue">Ask your Boat Dealer to apply <b><a rel="noreferrer" target="_blank" href="https://auroramarine.com/alumetron.html">ALUMETRON</a></b> and
                                    <b><a rel="noreferrer" target="_blank" href="https://auroramarine.com/vs721-bottom-coat.html"> VS721</a></b> or Do It Yourself and Save. We’ll show you how.
                                </p>
                                <p className="sblue">If you allow the pontoons to become stained, fouled and etched, it will make your boat look crappy and devalue your boating investment by many thousands of dollars.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="border rounded-4 border-dark-subtle bg-white pt-2 ps-1">
                            <div className="row">
                                <div className="col">
                                    <p className="fw-bold text-danger"><em>Easy to Use, Step by Step, Automatic Calculator to:</em></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ol className="sblue">
                                        <li>Calculate the Sq. Ft. of your pontoons</li>
                                        <li>Determine the product you need</li>
                                        <li>Get a Quote</li>
                                        <li>Get your 3 Year Factory Warranty on the finish</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <StepOne />
                    </div>
                </div>
            </div>
        </>
    )
}

export default New