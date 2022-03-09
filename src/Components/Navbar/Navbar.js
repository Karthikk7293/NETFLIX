import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  text-light">
    <div className="container-fluid">
    <a className="navbar-brand invisible" href="#"><img width='50px' height='auto' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NETFLICX" /></a>
      <a className="navbar-brand" href="#"><img width='100px' height='auto' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li> <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Tv Show </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Recently Added</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">My List</a>
          </li>
        </ul>
       <div className="profile">
       <ul className="navbar-nav ">
       <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#"><ion-icon name="search"></ion-icon></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Kids</a>
          </li>
           <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">DVD </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#"><ion-icon name="notifications"></ion-icon> <sup className='px-2 bg-danger text-light rounded-pill'>1</sup></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#"><img src="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06" width='30px' alt="" /></a>
          </li>
          <li className="nav-item invisible">
            <a className="nav-link active " aria-current="page" href="#">content</a>
          </li>
        </ul>
       </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
