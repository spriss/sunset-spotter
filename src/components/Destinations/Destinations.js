import React, { useState } from 'react';
import city from '../Forecast/Forecast'
import './Destinations.css';


const Destinations = (props) => {
    const cardView = props.cardView;
    
    return(
    
        <div className='destinations' style={{opacity: cardView}}>
            <div className= "card">
            <div className='card-img'>
                <div className='image' id='imageOne'></div>
            </div>
            <div className="card-body">
                <div className='Title'>North Passage Point Park</div>
                <div className='Body'>0.7 Miles Away</div>
                <td className="Button2" onClick={()=> window.open("https://goo.gl/maps/TAjoU2a5BzmWGNv66", "_blank")}>Get Directions</td>
            </div>
            </div>
        
            <div className= "card">
            <div className='card-img'>
                <div className='image' id='imageTwo'></div>
            </div>
            <div className="card-body">
                <div className='Title'>Ravenna Park</div>
                <div className='Body'>1.3 Miles Away</div>
                <td className="Button2" onClick={()=> window.open("https://goo.gl/maps/GiuBAcj73dKb3GC48", "_blank")}>Get Directions</td>
            </div>
            </div>
        
            <div className= "card">
            <div className='card-img'>
                <div className='image' id='imageThree'></div>
            </div>
            <div className="card-body">
                <div className='Title'>West Montlake Park</div>
                <div className='Body'>1.0 Miles Away</div>
                <td className="Button2" onClick={()=> window.open("https://goo.gl/maps/Dj6FJtMyAhc52c4QA", "_blank")}>Get Directions</td>
            </div>
            </div>
      </div>
    )

}

export default Destinations;