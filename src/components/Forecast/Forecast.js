import React from 'react';
import { useState } from 'react';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});   
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/climate/month?q=seattle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "2bc802fca1msh837fec9530457e8p122ea3jsn960d91b484d4"
            }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
    .catch(err => {
        console.error(err);
    });
   }
   return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions responseObj={responseObj}/>
        </div>
   )
}
export default Forecast;