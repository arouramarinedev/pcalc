import newImg from '../../img/pontoon-calculator/new.jpg';
import newImg2 from '../../img/pontoon-calculator/new-1.jpg';
import oldImg from '../../img/before-un.jpg';
import oldImg2 from '../../img/before-un-2.jpg';


function FirstInfo() {
    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h4 className="fw-bold sblue"><em>
                            Protect the Factory Finish on your Pontoons for up to 10 years
                            </em>
                        </h4>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <p className="sblue"><b>Protected</b> 
                            <span><br/>New Pontoons protected with <b>Alumetron</b> and <b>VS721</b></span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3">
                        <a href={newImg} rel="noreferrer" target="_blank"><img className="img-fluid" src={newImg} alt="new pontoon boat protected with Alumetron" width={140} /></a>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3">
                        <a href={newImg2} rel="noreferrer" target="_blank"><img className="img-fluid" src={newImg2} alt="new pontoon boat protected with Alumetron" width={140} /></a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                    <p className="sblue"><b>Unprotected</b> 
                            <span><br/>Pontoons after 1 season in a fresh water lake</span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3">
                    <a href={oldImg} rel="noreferrer" target="_blank"><img className="img-fluid" src={oldImg} alt="Unpontoon boat protected with Alumetron" width={140} /></a>

                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3">
                    <a href={oldImg2} rel="noreferrer" target="_blank"><img className="img-fluid" src={oldImg2} alt="Unpontoon boat protected with Alumetron" width={140} /></a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <p className="sblue">The Best Time to Protect your Aluminum Pontoons is when your boat is Brand New; before it goes in the water. It’s easier, faster and less expensive than cleaning and restoring the finish after the fact. </p>
                        <p className="sblue">Ask your Boat Dealer to apply <b><a rel="noreferrer" target="_blank" href="https://auroramarine.com/alumetron.html">ALUMETRON</a></b> and <b>VS721</b> or Do It Yourself and save. We’ll show you how.</p>
                        <p className="sblue">If you allow the pontoons to become stained, fouled and etched, it will make your boat look crappy and devalue your boating investment by many thousands of dollars.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="fw-bold text-danger"><em>Use this handy Step by Step Automatic Calculator to:</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ol className="sblue">
                            <li>Calculate the Sq. Ft. of your pontoons</li>
                            <li>Calculate the amount of product you need</li> 
                            <li>Get a Quote</li>
                            <li>Get your 3 Year Factory Warranty on the finish</li>
                        </ol>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default FirstInfo;