import React, { useState } from 'react';
import city from '../Forecast/Forecast'

const Destinations = () => {
    /*
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    */



        fetch("https://google-maps-search1.p.rapidapi.com/search", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-rapidapi-host": "google-maps-search1.p.rapidapi.com",
                "x-rapidapi-key": "2bc802fca1msh837fec9530457e8p122ea3jsn960d91b484d4"
            },
            "body": JSON.stringify({
                "limit": 3,
                "language": "en",
                "region": "us",
                "queries": [
                    "Lawyers near San Francisco, CA, US",
                    "Lawyers near New York, NY, US",
                    "Graphic Designers in Chicago"
                ],
                "coordinates": "37.381315,-122.046148"
            })
        })
        .then(response => {
            console.log(response.json);
        })
        .catch(err => {
            console.error(err);
        });




    return(
        
        <body className='destinations'>
            <div className= "card">
            <div className='card-img'>
                <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
            </div>
            <div class="card-body">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <button className="Button" type="submit">Get Forecast</button>
            </div>
            </div>
        
            <div className= "card">
            <div className='card-img'>
                <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
            </div>
            <div class="card-body">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
            </div>
        
            <div className= "card">
            <div className='card-img'>
                <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
            </div>
            <div class="card-body">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
            </div>
    
      </body>
    )

}

export default Destinations;