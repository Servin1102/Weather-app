import React from 'react';

const Navbar = () => {
    return (
        
    <header className="p-3 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
                <a href="/"><img src="./src/images/weather_43796.png" alt="" /></a>
                    <div className='col-12 d-flex justify-content-center'>
                        <h1>Weather</h1>
                    </div>
                    
        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-white bg-dark" placeholder="City..." aria-label="Search" /> 
        </form>
        <div className="text-end">
          <button type="button" className="btn btn-warning">Search</button>
        </div> */}
      </div>
    </div>
  </header>
   
    );
};

export default Navbar;