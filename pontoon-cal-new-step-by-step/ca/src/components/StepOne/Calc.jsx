import React from 'react'

function Calc() {
    return (
        <>
                <div className="row mt-2">
                    <div className="col col-sm-12 col-md-7 col-lg-7 mb-3 border border-2 rounded py-2">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col fw-bold">Pontoon #1</div>
                            <div className="col fw-bold">Pontoon #2</div>
                            <div className="col fw-bold">Pontoon #3</div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col"></div>
                            <div className="col"><input type="checkbox" className="form-check-input me-1 shadow-none" />Same</div>
                            <div className="col"><input type="checkbox" className="form-check-input me-1 shadow-none" />Same</div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <p className="sblue fw-bold">1.</p>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control form-control-sm shadow-none" placeholder="Length in Feet" />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control form-control-sm shadow-none" placeholder="Length in Feet" />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control form-control-sm shadow-none" placeholder="Length in Feet" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <p className="sblue fw-bold">2.</p>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control form-control-sm shadow-none" placeholder="Radius in Inches" />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control form-control-sm shadow-none" placeholder="Radius in Inches" />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control form-control-sm shadow-none" placeholder="Radius in Inches" />
                            </div>
                        </div>
                        <div className="row justify-content-end align-items-end mt-2">
                            <div className="col-4">
                                <button className="btn btn-danger btn-md">Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Calc