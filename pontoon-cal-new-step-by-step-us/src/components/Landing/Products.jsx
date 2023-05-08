import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    DATA200, DATA200T, NDATA200, NDATA200T,
    DATA250, DATA250T, NDATA250, NDATA250T,
    DATA300, DATA300T, NDATA300, NDATA300T,
    DATA350, DATA350T, NDATA350, NDATA350T,
    DATA450, DATA450T, NDATA450, NDATA450T,
    DATA500, DATA500T, NDATA500, NDATA500T,
    DATA600, DATA600T, NDATA600, NDATA600T,
} from '../../Data';
import ProductRow from './ProductRow';




const Products = () => {

    const condition = useSelector((state) => state.conditioner.value);
    const sqft = useSelector((state) => state.squareft.value);

    const dispatch = useDispatch();

    let decide = '';
   

    if (sqft > 500) {
        decide = condition == 'cleany' ?
        DATA600.map((item) => {
            return (
                <ProductRow
                    image={item.img}
                    title={item.title}
                    bottle={item.bottle}
                    price={item.price}
                />
            );
        })
            :
            NDATA600.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
    } else if (sqft > 450 && sqft <= 500) {
        decide = condition == 'cleany' ?
            DATA500.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
            :
            NDATA500.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
    } else if (sqft > 350 && sqft <= 450) {
        decide = condition == 'cleany' ?
            DATA450.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
            :
            NDATA450.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
    } else if (sqft > 300 && sqft <= 350) {
        decide = condition == 'cleany' ?
            DATA350.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
            :
            NDATA350.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })

    } else if (sqft > 250 && sqft <= 300) {
        decide = condition == 'cleany' ?
            DATA300.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
            :
            NDATA300.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })

    } else if (sqft > 200 && sqft <= 250) {
        decide = condition == 'cleany' ?
            DATA250.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
            :
            NDATA250.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
    } else {
        decide = condition == 'cleany' ?
            DATA200.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
            :
            NDATA200.map((item) => {
                return (
                    <ProductRow
                        image={item.img}
                        title={item.title}
                        bottle={item.bottle}
                        price={item.price}
                    />
                );
            })
    }



    let subtotalDecide = '';
    let discountDecide = '';
    let totalDecide = '';

    if (sqft > 500) {
        subtotalDecide = condition == 'cleany' ? DATA600T.map((item) => item.subtotal) : NDATA600T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA600T.map((item) => item.discount) : NDATA600T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA600T.map((item) => item.total) : NDATA600T.map((item) => item.total)
      
    } else if (sqft > 450 && sqft <= 500) {
        subtotalDecide = condition == 'cleany' ? DATA500T.map((item) => item.subtotal) : NDATA500T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA500T.map((item) => item.discount) : NDATA500T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA500T.map((item) => item.total) : NDATA500T.map((item) => item.total)
    } else if (sqft > 350 && sqft <= 450) {
        subtotalDecide = condition == 'cleany' ? DATA450T.map((item) => item.subtotal) : NDATA450T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA450T.map((item) => item.discount) : NDATA450T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA450T.map((item) => item.total) : NDATA450T.map((item) => item.total)
       
    } else if (sqft > 300 && sqft <= 350) {
        subtotalDecide = condition == 'cleany' ? DATA350T.map((item) => item.subtotal) : NDATA350T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA350T.map((item) => item.discount) : NDATA350T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA350T.map((item) => item.total) : NDATA350T.map((item) => item.total)

    } else if (sqft > 250 && sqft <= 300) {
        subtotalDecide = condition == 'cleany' ? DATA300T.map((item) => item.subtotal) : NDATA300T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA300T.map((item) => item.discount) : NDATA300T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA300T.map((item) => item.total) : NDATA300T.map((item) => item.total)

    } else if (sqft > 200 && sqft <= 250) {
        subtotalDecide = condition == 'cleany' ? DATA250T.map((item) => item.subtotal) : NDATA250T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA250T.map((item) => item.discount) : NDATA250T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA250T.map((item) => item.total) : NDATA250T.map((item) => item.total)
    } else {
        subtotalDecide = condition == 'cleany' ? DATA200T.map((item) => item.subtotal) : NDATA200T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA200T.map((item) => item.discount) : NDATA200T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA200T.map((item) => item.total) : NDATA200T.map((item) => item.total)
    }
    


    return (
        <>
            <div className="row justify-content-center">


                <div className="col-11 bg-white mx-5 py-3 border rounded-3">


                    <div className="row text-center justify-content-center mt-4 sblue">
                        <div className="col-7">
                            <h4 className="fw-bold">Products Required</h4>
                        </div>
                        {/* <div className="col-2">
                                <h4 className="fw-bold">Qty Req.</h4>
                            </div> */}
                        <div className="col-2">
                            <h4 className="fw-bold">No. of Bottles</h4>
                        </div>
                        <div className="col-2">
                            <h4 className="fw-bold">Total Price</h4>
                        </div>
                    </div>
                    {decide}
                    <hr />
                    <div className="row text-center justify-content-center align-items-center">
                        <div className="col-5">

                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                            <h4 className="fw-bold">Subtotal:</h4>
                            <h4 className="fw-bold">Discount:</h4>
                            <h4 className="text-primary fw-bold">Total Investment:</h4>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                            <h4 className="text-danger fw-bold">${subtotalDecide}</h4>
                            <h4 className="fw-bold">- ${discountDecide}</h4>
                            <h4 className="text-primary fw-bold">${totalDecide}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products