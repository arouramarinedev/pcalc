import before from '../../img/pontoon-calculator/before.png';
import after from '../../img/pontoon-calculator/after_1.jpg';
import newImg from '../../img/pontoon-calculator/new.jpg';
import newImg2 from '../../img/pontoon-calculator/new-1.jpg';
import logo from '../../img/pontoon-calculator-logo-r2.png';


// Formula is  return ((Math.PI * (radius * radius) / 144) + (2*Math.PI*length));
function Home() {
    return (
        <>
            <div className="calculator">
                <div className="calculator--container" style={{ background: '#f8fcff' }}> {/*  E9F6FF*/}
                    <div className="container text-center">
                        <img src={logo} alt="Aurora Marine Automatic Pontoon Calculator Logo" className="logo-img" />
                    </div>
                    <div className="calculator-box" style={{ color: '#102174' }}> {/*  */}
                        {/*COLUMN LEFT*/}
                        <div className="bp calculator-left">
                            <div className="checkmark-box" style={{ background: 'white !important' }}>
                                <ul className="calculator-list" style={{ listStyle: 'none' }}>
                                    <li><i class="bi bi-star-fill text-danger me-1"></i>Calculate the Sq. Ft. of your pontoons</li>
                                    <li><i class="bi bi-star-fill text-danger me-1"></i>Calculate the amount of product you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;need</li>
                                    <li><i class="bi bi-star-fill text-danger me-1"></i>Get a Quote</li>
                                    <li><i class="bi bi-star-fill text-danger me-1"></i>Get your 3 year Factory Warranty</li>
                                </ul>
                            </div>
                            <br />
                            <div className="calculator--description" style={{ color: '#102174' }}>
                                <span className="instructions-txt">INSTRUCTIONS:</span>
                                <ol>
                                    <li>Type in the Length in feet</li>
                                    <li>Type in the <a href="#" className="showTip L1">Radius</a> in inches</li>
                                    <li>Answer Basic Questions</li>
                                    <li>Press CALCULATE</li>
                                </ol>
                            </div>
                            <br />
                            <hr size={1} color="#d5d5d5" /><br />
                            {/*FIX cookies*/}
                            {/*

                            <iframe src="https://www.auroramarine.comhttps://www.auroramarine.ca/store/pontoon-calculator-cookies" onload="cartcookies();" id="iframe1" width="1" height="1" style="border:0"></iframe>*/}
                            {/*END FIX cookies*/}
                            <div className="calculator--form checkmark-box" style={{
                                color: '#102174',
                                borderRadius: '15px',
                                border: '1px solid #d5d5d5',
                                background: 'white',
                                }}>
                                <form name="pontoon-calculator" className="pontoon-calculator" autoComplete="off">
                                    <span className="displayErrors" />
                                    <table>
                                        <thead>
                                            {/* class="blue-color"*/}
                                            <tr><th />
                                                <th className="mob-center">Pontoon <span className="hide-420"><br /></span>#1</th>
                                                <th className="mob-center">Pontoon <span className="hide-420"><br /></span>#2</th>
                                                <th className="mob-center">Pontoon <span className="hide-420"><br /></span>#3</th>
                                            </tr></thead>
                                        <tbody>
                                            <tr>
                                                <th />
                                                <td />
                                                <td className="same-box-txt">
                                                    <div className="same-checkbox">
                                                        <input className="me-1" type="checkbox" name="samePontoons2" tabIndex={3} />
                                                        Same
                                                    </div>
                                                </td>
                                                <td className="same-box-txt">
                                                    <div className="same-checkbox">
                                                        <input className="me-1" type="checkbox" name="samePontoons3" tabIndex={6} />
                                                        Same
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="numbered-item">1.</span></td>
                                                <td><input style={{ fontSize: '13px' }} type="text" min={0} required className="feet" name="pontoonLength1" placeholder="Length in Feet" tabIndex={1} autofocus /></td>
                                                <td><input style={{ fontSize: '13px' }} type="text" min={0} className="feet" name="pontoonLength2" placeholder="Length in Feet" tabIndex={4} /></td>
                                                <td><input style={{ fontSize: '13px' }} type="text" min={0} className="feet" name="pontoonLength3" placeholder="Length in Feet" tabIndex={7} /></td>
                                            </tr>
                                            <tr>
                                                <td><span className="numbered-item">2.</span></td>
                                                <td><input style={{ fontSize: '13px' }} type="text" min={0} required className="inch" name="pontoonRadius1" placeholder="Radius in Inches" tabIndex={2} /></td>
                                                <td><input style={{ fontSize: '13px' }} type="text" min={0} className="inch" name="pontoonRadius2" placeholder="Radius in Inches" tabIndex={5} /></td>
                                                <td><input style={{ fontSize: '13px' }} type="text" min={0} className="inch" name="pontoonRadius3" placeholder="Radius in Inches" tabIndex={8} /></td>
                                            </tr>
                                            <tr>
                                                <th />
                                                <td />
                                                <td />
                                                <td className="same-box-txt">{/*<input type="checkbox" name="samePontoons3"> Same*/}
                                                    <button name="calculate" className="calculate calculate-button" tabIndex={9}>CALCULATE</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>

                        {/*COLUMN RIGHT*/}
                        <div className="bp calculator-right right-txt top-36" style={{ marginTop: '0.1px', }}>
                            <div style={{
                                color: '#102174',
                                borderRadius: '15px',
                                border: '1px solid #d5d5d5',
                                background: 'white',
                                paddingBottom: '105px',
                            }}>
                                <div className="max-320">
                                    <span className="font-31">Everything you need</span> <br />to clean and brighten your pontoons, remove marine fouling, stains, streaks, acid etching, protect them with 3 Year Clear Coat and antifoul them.<br />
                                    <br />
                                    <span style={{ color: 'red' }}>Make your pontoons look new again and add thousands of dollars in value to your boat.</span>
                                </div>
                                <div className="pontoon-imgs">
                                    <p className="mb-0" style={{ fontSize: '19px', marginLeft: '19px' }}>New Pontoons</p>
                                    <div className="pontoon-imgs-column" style={{ marginBottom: '4px' }}>
                                        <a href={newImg} target="_blank">
                                            <img src={newImg} className="pontoon-img" alt="A stained and streaky pontoon before using Aurora Alumabuff Buffing Compound." />
                                        </a>
                                    </div>
                                    <div className="pontoon-imgs-column">
                                        <a href={newImg2} target="_blank">
                                            <img src={newImg2} className="pontoon-img" alt="A clean, shiny pontoon after using Aurora Alumabuff Buffing Compound." />
                                        </a>
                                    </div>
                                    <div className="clear" />
                                    <p className="mb-0" style={{ fontSize: '19px', marginLeft: '19px' }}>Used Pontoons</p>
                                    <div className="pontoon-imgs-column">
                                        <a href={before} target="_blank">
                                            <img src={before} className="pontoon-img" alt="A stained and streaky pontoon before using Aurora Alumabuff Buffing Compound." />
                                        </a>
                                        <p className="mb-0">Before</p>
                                    </div>
                                    <div className="pontoon-imgs-column">
                                        <a href={after} target="_blank">
                                            <img src={after} className="pontoon-img" alt="A clean, shiny pontoon after using Aurora Alumabuff Buffing Compound." />
                                        </a>
                                        <p className="mb-0">After</p>
                                    </div>
                                </div>
                            </div><br />
                            <hr size={1} color="#d5d5d5" />
                            <div style={{
                                marginLeft: '7px',
                                color: '#102174',
                                borderRadius: '15px',
                                border: '1px solid #d5d5d5',
                                background: 'white',
                            }}>
                                <h3 className="fw-bold ms-2 mt-2" style={{ color: 'red' }}>Benefits of ALUMETRON Protected Pontoons:</h3>
                                <ul style={{ fontSize: '14px', listStyle: 'none' }}>
                                    <li className="mb-1 mt-3"><span className="me-1" style={{ color: 'green' }}>✓ </span> Pontoons Stay Clean and Shiny Year After Year</li>
                                    <li className="mb-1"><span className="me-1" style={{ color: 'green' }}>✓ </span> Pride of Ownership. Your Boat is a Reflection of Your &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personality.</li>
                                    <li className="mb-1"><span className="me-1" style={{ color: 'green' }}>✓ </span> Greater Trade or Resale Value. Adding $5,000 to $10,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is Common.</li>
                                    <li className="mb-1"><span className="me-1" style={{ color: 'green' }}>✓ </span> Better Fuel Economy. Reduce Fuel Consumption Up to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20%.</li>
                                    <li className="mb-1"><span className="me-1" style={{ color: 'green' }}>✓ </span> Easier Maintenance. Pontoons Can Stay Fouling Free All &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Summer.</li>
                                    <li className="mb-1"><span className="me-1" style={{ color: 'green' }}>✓ </span> Lasts up to 10 Years. Save Money by Reducing Costly &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Annual Maintenance.</li>
                                </ul>
                            </div><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
