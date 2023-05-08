import React from 'react'

const ProductRow = ({image, title, bottle, price}) => {
    return (
        <>
            <div className="row mb-3 text-center justify-content-center align-items-center sblue">
                <div className="col-5">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 ms-4">
                            <img src={image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                            <h5>{title}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    {/* <h5 className="">{item.qty}</h5> */}
                </div>
                <div className="col-2">
                    <h5 className="">{bottle}</h5>
                </div>
                <div className="col-2">
                    <h5 className="">${price}</h5>
                </div>
            </div>
        </>
    )
}

export default ProductRow