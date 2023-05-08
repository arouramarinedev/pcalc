import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { newUrlbuy } from '../../redux/urlbuy';

const Buttons = () => {

    const condition = useSelector((state) => state.conditioner.value);
    const sqft = useSelector((state) => state.squareft.value);
    const dispatch = useDispatch();
    // const urlbuy = useSelector((state) => state.urlbuy.value);

   
        // dispatch(newUrlbuy('https://store.auroramarine.com/pontoon-1-package-up-to-600-sqft.html'))
 
    let urlbuy = ''
        if (sqft > 500) {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-600-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-600-sqft.html'
        } else if (sqft > 450 && sqft <= 500) {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-500-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-500-sqft.html'
        } else if (sqft > 350 && sqft <= 450) {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-450-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-450-sqft.html'
        } else if (sqft > 300 && sqft <= 350) {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-350-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-350-sqft.html'
    
        } else if (sqft > 250 && sqft <= 300) {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-300-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-300-sqft.html'
    
        } else if (sqft > 200 && sqft <= 250) {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-250-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-250-sqft.html'
                
        } else {
            urlbuy = condition == 'cleany' ?
            'https://store.auroramarine.com/pontoon-1-package-up-to-200-sqft.html'
                :
            'https://store.auroramarine.com/pontoon-2-package-up-to-200-sqft.html'
        }


    const handleClick = () => {
        window.location.replace(urlbuy);
    }
    return (
        <>
            <div className="row mt-2 align-items-center justify-content-end">
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 text-end">
                    <button className="btn btn-lg btn-danger" onClick={handleClick}>Add to Cart</button>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                    <button className="btn btn-lg btn-success" onClick={handleClick}>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Buttons