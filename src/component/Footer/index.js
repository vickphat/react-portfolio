import React from 'react';

const Footer = () => {

    return (
      <nav className=" fixed-bottom bg-dark d-flex justify-content-between flex-md-row">
        <p className="text-white">
        React Portfolio by Vick Phat | vickphat@gmail.com | (216)-630-2006 | www.github.com/vickphat     
        </p>
  
        <div className="d-flex footer">
  
          <a className="nav-item nav-link p-0 mx-5" href='mailto:vickphat@gmail.com'>
            <h1><i className="bi bi-envelope-fill"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 mx-5" href="https://github.com/vickphat"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-github"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 mx-5" href="https://www.linkedin.com/in/vicheka-phat-9a569a98/"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-linkedin"></i></h1> 
          </a>
  
  
        </div>
  
      </nav>
    )
  }
  
  export default Footer;



