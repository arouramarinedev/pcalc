import React from 'react'
import NewCalc from './NewCalc';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newLocation } from "../../redux/location";

function StepOne() {

  const dispatch = useDispatch();

// const location = useSelector((state) => state.locationer.value);
  // getting user ip locations vv

  // use If Else statements to show the Cost Comparison and other prices, Check if the location is "CANADA" and add else if.

// const getUserLocationFromAPI = async () => {
//  try {
//    const response = await axios.get(
//      "https://ipgeolocation.abstractapi.com/v1/?api_key=1f32079736c143ef946d98a4dd005733"
//    );
//    dispatch(newLocation(response.data.country));
//    console.log(response.data.country);
//  } catch (error) {
//    console.log("Something went wrong getting Geolocation from API!");
//  }
// };

// useEffect(() => {
//  getUserLocationFromAPI();
// }, []);


  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col mt-3">
                    <h3 className="text-danger fw-bold mt-1"><em>Step 1.</em></h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ol className="sblue" type="a">
                      <li>Type in the Length in feet</li>
                      <li>Type in the Radius in inches</li>
                      <li>Press CALCULATE</li>
                    </ol>
                </div>
            </div>
            {/* <Calc /> */}
            <NewCalc />
        </div>
    </>
  )
}

export default StepOne;