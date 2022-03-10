import React, { useState } from 'react';
import city from '../Forecast/Forecast'
import './Destinations.css';


const Destinations = () => {

    return(
    
        <div className='destinations'>
            <div className= "card">
            <div className='card-img'>
                <img src="https://lh5.googleusercontent.com/p/AF1QipNp0e6GKgtd9-Gi92nNFjOZd__P6omSh07tCQzw=w426-h240-k-no"></img>
            </div>
            <div className="card-body">
                <div className='Title'>North Passage Point Park</div>
                <div className='Body'>0.7 Miles Away</div>
                <td className="Button2" onClick={()=> window.open("https://goo.gl/maps/TAjoU2a5BzmWGNv66", "_blank")}>Get Directions</td>
            </div>
            </div>
        
            <div className= "card">
            <div className='card-img'>
                <img src="https://lh5.googleusercontent.com/p/AF1QipOCIooIPbzGyZkiNu4nKjxoIdjZo08pWYFZgAFS=w408-h272-k-no"></img>
            </div>
            <div className="card-body">
                <div className='Title'>Ravenna Park</div>
                <div className='Body'>1.3 Miles Away</div>
                <td className="Button2" onClick={()=> window.open("https://goo.gl/maps/GiuBAcj73dKb3GC48", "_blank")}>Get Directions</td>
            </div>
            </div>
        
            <div className= "card">
            <div className='card-img'>
                <img src="https://lh5.googleusercontent.com/p/AF1QipPaUdOgWq-6EYX5FtidS3QmZqECQRFQWmKyBmXn=w408-h544-k-no"></img>
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