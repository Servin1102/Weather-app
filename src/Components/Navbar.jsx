import React from 'react';

const Navbar = () => {
    return (
        
    <header className="p-3 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
                <a href="/"><img src="./src/images/weather_43796.png" alt="" /></a>
                    <div className='col-12 d-flex justify-content-center'>
                        <h1>Weather APP</h1>
                    </div>
      </div>
    </div>
  </header>
   
    );
};

export default Navbar;