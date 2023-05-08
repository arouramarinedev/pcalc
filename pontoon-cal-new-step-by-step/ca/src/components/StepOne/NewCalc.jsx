import React from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { newLength, newLength1, newLength2 } from '../../redux/dimensions'
import { newRadius, newRadius1, newRadius2 } from '../../redux/radius'
import { useNavigate } from 'react-router-dom';

function NewCalc() {

    const navigate = useNavigate();

    const length = useSelector((state) => state.length.value)
    const length1 = useSelector((state) => state.length.value1)
    const length2 = useSelector((state) => state.length.value2)
    const radius = useSelector((state) => state.radius.value)
    const radius1 = useSelector((state) => state.radius.value1)
    const radius2 = useSelector((state) => state.radius.value2)


    const dispatch = useDispatch()

    const handleSameOne = (e) => {
       if(e.target.checked === true){
            dispatch(newLength1(length));
            dispatch(newRadius1(radius))
       }
    }
    const handleSameTwo = (e) => {
        if(e.target.checked === true){
             dispatch(newLength2(length));
            dispatch(newRadius2(radius))
        }
     }

     const handleSubmit = (e) => {
        navigate('/secondstep');
     }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="row mt-2">
                    <div className="col mb-3 border rounded-4 border-dark-subtle bg-white pt-2 ps-1">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col fw-bold">Pontoon #1</div>
                            <div className="col fw-bold">Pontoon #2</div>
                            <div className="col fw-bold">Pontoon #3</div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col"></div>
                            <div className="col"><input type="checkbox" className="form-check-input me-1 shadow-none" onChange={(e) => handleSameOne(e)} />Same</div>
                            <div className="col"><input type="checkbox" className="form-check-input me-1 shadow-none" onChange={(e) => handleSameTwo(e)}/>Same</div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <p className="sblue fw-bold ms-1">1.</p>
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control form-control-sm shadow-none" 
                                    placeholder="Length in Feet" 
                                    value={length} 
                                    onChange={(e) => dispatch(newLength(e.target.value))} 
                                    required
                                    />
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control form-control-sm shadow-none" 
                                    placeholder="Length in Feet" 
                                    value={length1} 
                                    onChange={(e) => dispatch(newLength1(e.target.value))}
                                    required
                                    />
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control form-control-sm shadow-none" 
                                    placeholder="Length in Feet" 
                                    value={length2} 
                                    onChange={(e) => dispatch(newLength2(e.target.value))}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <p className="sblue fw-bold ms-1">2.</p>
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control form-control-sm shadow-none" 
                                    placeholder="Radius in Inches" 
                                    value={radius}
                                    onChange={(e) => dispatch(newRadius(e.target.value))} 
                                    required
                                    />
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control form-control-sm shadow-none" 
                                    placeholder="Radius in Inches" 
                                    value={radius1}
                                    onChange={(e) => dispatch(newRadius1(e.target.value))} 
                                    required
                                    />
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control form-control-sm shadow-none" 
                                    placeholder="Radius in Inches" 
                                    value={radius2} 
                                    onChange={(e) => dispatch(newRadius2(e.target.value))}/>
                            </div>
                        </div>
                        <div className="row justify-content-end align-items-end my-2">
                            <div className="col-4">
                                <button className="btn btn-danger btn-md" type="submit">Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
    </>
  )
}

export default NewCalc