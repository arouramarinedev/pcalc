import React, { useState, useRef } from 'react'
import "./style.css"
import { useSelector, useDispatch } from 'react-redux'
import { newSquareft } from '../../redux/squareft'
import { newCondition } from '../../redux/condition'
import { useNavigate } from 'react-router-dom';
import SendEmail from './SendEmail'
import emailjs from '@emailjs/browser';


function SecondPage() {
  //           ((Math.PI * (radius * radius) / 144) + (2*Math.PI*length));


  // const radius = 12;
  // const length = 22;
  // const radius1 = 12;
  // const length1 = 22;
  // const radius2 = 12;
  // const length2 = 22;

  // console.log(sq+sq1+sq2);

  const [inputCondition, setInputCondition] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch()
  const length = useSelector((state) => state.length.value)
  const length1 = useSelector((state) => state.length.value1)
  const length2 = useSelector((state) => state.length.value2)
  const radius = useSelector((state) => state.radius.value)
  const radius1 = useSelector((state) => state.radius.value1)
  const radius2 = useSelector((state) => state.radius.value2)

  const sq = ((Math.PI * (radius * radius) / 144) + (2 * Math.PI * length));
  const sq1 = ((Math.PI * (radius1 * radius1) / 144) + (2 * Math.PI * length1));
  const sq2 = ((Math.PI * (radius2 * radius2) / 144) + (2 * Math.PI * length2));

  let sqFt = '';
  if (sq2 > 0) {
    sqFt = sq + sq1 + sq2;
  } else if (sq1 > 0) {
    sqFt = sq + sq1;
  } else {
    sqFt = sq;
  }

  const [other, setOther] = useState(false);

  const handleSubmit = (e) => {
    other ? sendEmail()
    :
    dispatch(newCondition(inputCondition))
    dispatch(newSquareft(sqFt))
    navigate('/final');
  }

  const handleOther = (e) => {
    if (e.target.checked === true) {
      setOther(true);
    } else {
      setOther(false);
    }
    console.log(other);
  }


  const [desc, setDesc] = useState('');
  const [email, setEmail] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
     

      emailjs.sendForm('service_0vaow7v', 'pontoon_calc', form.current, 'sH3kR-eZh3e7uucnc')
          .then((result) => {
              navigate('/thankyou');
          }, (error) => {
              console.log(error.text);
          });
  };

  return (

    <>
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <div className="calculator container bg-body">
          <div className="row ms-1">
            <div className="col">
              <h2 className="text-danger text-center fw-bold my-4">Your Pontoons Total Area is:</h2>
              <h1 className="text-danger text-center fw-bold"><span className="border border-dark-subtle shadow rounded bg-white px-2">{Math.round(sqFt)} Sq. Ft.</span></h1>
              <h2 className="text-danger fw-bold mt-3"><em>Step 2.</em></h2>
              <p className="sblue ms-5 me-3 text-center" style={{ fontSize: '18px', }}>To select the right products to protect your new pontoons, select which item best
                describes your pontoons:</p>
            </div>
          </div>
          <div className="row ms-5 justify-content-center">
            <div className="col-10 border rounded bg-white shadow">
              <p className="mt-1 fs-4">The Pontoons on my boat are:</p>
              <ol>
                <li className="mb-1">
                  {/* <span className="ms-3 fs-5">Clean and Shiny</span> */}
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" id="inlineCheckbox1" name="clean" defaultValue="cleany" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="inlineCheckbox1">Clean and Shiny</label>
                  </div>
                  {/* <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                    <input className="form-check-input" type="radio" name="clean" id="inlineCheckbox2" defaultValue="cleann" />
                    <label className="form-check-label fs-5 ms-1" htmlFor="inlineCheckbox2">No</label>
                  </div> */}
                </li>
                <li className="my-1">
                  {/* <span className="ms-3 fs-5">Raw Aluminum (Mill Finish)</span> */}
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="mill1" defaultValue="cleany" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="mill1">Raw Aluminum (Mill Finish)</label>
                  </div>
                </li>
                <li className="my-1">
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="mirror1" defaultValue="cleany" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="mirror1">Raw Aluminum Polished to a Mirror Finish</label>
                  </div>
                </li>
                <li className="my-1">
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="pabove1" defaultValue="cleany" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="pabove1">Painted Above the Waterline (Factory Finish)</label>
                  </div>
                </li>
                <li className="my-1">
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="pbelow1" defaultValue="cleany" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="pbelow1">Painted Below the Waterline (Factory Finish)</label>
                  </div>
                </li>
                <li className="my-1">
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="pfoul1" defaultValue="cleany" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="pfoul1">Painted Below the Waterline with Anti-Fouling Paint</label>
                  </div>
                </li>
                <li className="my-1">
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="whites1" defaultValue="cleann" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="whites1">Stained with white streaks or spots</label>
                  </div>
                </li>
                <li className="my-1">
                  <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                    <input required className="form-check-input" type="radio" name="clean" id="darks1" defaultValue="cleann" onClick={(e) => setInputCondition(e.target.value)} />
                    <label className="form-check-label fs-5 ms-2" htmlFor="darks1">Stained with dark steaks or smudges</label>
                  </div>
                </li>
                <li>
                  {/* <span className="fs-5 ms-3 sblue">Other </span> */}
                  <div className="form-check form-check-inline sblue d-inline-flex align-items-center ms-2">
                    &nbsp;  <input className="form-check-input" type="radio" name="clean" id="other" onClick={(e) => handleOther(e)} />
                    <span className="form-check-label ms-2 fs-5">Other </span>
                  </div>
                  {other && <>
                  {/* <SendEmail /> */}
                 
                  <textarea type="text" className="form-control form-control-sm" placeholder="If Other, Please Explain" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
                  <input type="email" className="form-control form-control-sm mt-2" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                 
                  </>}
                </li>
              </ol>
            </div>
          </div>
          <div className="row ms-1">
            <div className="col text-center mt-4">
              <button className="btn btn-danger fw-bold" type="submit">Next</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SecondPage



