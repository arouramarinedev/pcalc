import React from 'react'

const Popup = ({imagelink, alttext, mtarget, mid, mtoggle, mclass}) => {
    return (
        <>
            {/* Button trigger modal */}

            <img className="img-fluid" data-bs-toggle="modal" data-bs-target={mtarget} src={imagelink} alt={alttext} width={260} />

            {/* Modal */}
            <div className="modal fade" id={mid} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" src={imagelink} alt={alttext} width={460} />
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Popup