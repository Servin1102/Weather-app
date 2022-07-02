import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Weather = () => {

    const [ city, setcity ] = useState({})
    const [temp, settemp ] = useState(0)
    const [ isC, setisC ] = useState(true)

    
    

    useEffect(() =>{
        const success = pos =>{
            const long = pos.coords.longitude
            const lat = pos.coords.latitude
                       
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bb16750571e6c29de28f9e3d1a04ce0f`)
            .then(res => {setcity(res.data);
                settemp(Math.round(res.data.main.temp - 273.15))
                
            });
        }

        navigator.geolocation.getCurrentPosition(success);
    }, [])

    console.log(city);
    console.log(temp);

    const converterC = () =>{
        if(isC){
            settemp(Math.round(((temp * 9/5 ) + 32)))
            setisC(false)
        } else{
            settemp(Math.round(((temp - 32) * 5/9)))
            setisC(true)  
        } 
    }
    
    

    return (
        <div className='container p-5'>
            <div className="card bg-card">
                <div className="d-flex justify-content-center p-5">
                    <h2><b>{city.name}, {city.sys?.country}</b></h2>
                </div>
                <div className='row m-0'>
                    <div className='col-6 text-center'>
                        <img src={`https://openweathermap.org/img/wn/${city.weather?.[0].icon}@2x.png`} className="icon" alt="" />
                    </div>
                    <div className='col-6 text-center'>
                        <p>"{city.weather?.[0].description}"</p>
                        <div className='align-bottom'>
                            <p><i className="fas fa-wind"></i><b> Wind speed: </b> {city.wind?.speed} m/s</p>
                            <p><i className="fas fa-cloud"></i><b> Clouds: </b> {city.clouds?.all}%</p>
                            <p><i className="fas fa-temperature-high"></i><b> Pressure: </b> {city.main?.pressure} mb</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <h3><b> {temp}</b> °{isC ? "C" : "F"}</h3>
                    </div>
                    <div className='col-12 text-center p-5'>
                        <button onClick={converterC}  className='btn-weather'>°C / °F</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;