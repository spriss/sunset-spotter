import React from 'react';
import {
    Wrapper,
    Small,
    Loader
} from './Conditions.css'

function sunsetTime(time) {

    let unix_timestamp = (time)
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;

}

const conditions = (props) => {
    
    return (

        <div className="Wrapper">

            {props.error && <small className="Small">Please enter a valid city.</small>}

            {props.loading && <div className="Loader" />}


            {props.responseObj.cod === 200 ?
                <div>
                    <p className='response'>In {props.responseObj.name} it is currently {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}. Sunset today is at: {sunsetTime(props.responseObj.sys.sunset)} PT.  </p>
                </div>
            : null
            }
        </div>
    )
}

export default conditions;