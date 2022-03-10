import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import {
    textInput,
    Radio,
    Button
} from './Forecast.css';

const Forecast = () => {



    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    
    setLoading(true);
    
    const uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "2bc802fca1msh837fec9530457e8p122ea3jsn960d91b484d4"
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
    console.log(city);
}


    return (
        <div>
            <header className='header'>
                <form className= "enterCity" onSubmit={getForecast}>
                    <div className='enterCity2'>Where do you want to go?</div>
                    <input
                        type="text"
                        placeholder="Enter City"
                        maxLength="50"
                        className="textInput"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    <label className="Radio">
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "imperial"}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        Fahrenheit
                    </label>
                    <label className="Radio">
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        Celcius
                    </label>
                    <button className="Button" type="submit">Get Forecast</button>
                    
                    
                </form>
                <Conditions
                responseObj={responseObj}
                error={error}
                loading={loading}
                />
            </header>
        </div>
    )
}

export default Forecast;