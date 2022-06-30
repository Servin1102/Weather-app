import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Weather = () => {

     "https://api.openweathermap.org/data/2.5/weather?lat=80&lon=80&appid=bb16750571e6c29de28f9e3d1a04ce0f"

    const [ city, setcity ] = useState({})

    useEffect(() =>{
        const success = pos =>{
            const long = pos.coords.longitude
            const lat = pos.coords.latitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bb16750571e6c29de28f9e3d1a04ce0f`)
            .then(res => setcity(res.data))
        }

        navigator.geolocation.getCurrentPosition(success);
    }, [])
    console.log(city);

    return (
        <div className='container p-5'>
            <div className="card bg-flowers">
                <div className="d-flex justify-content-center p-4">
                <h1>{city.name}, {city.sys.country}</h1>
                </div>
               

                
            </div>
        </div>
    );
};

export default Weather;