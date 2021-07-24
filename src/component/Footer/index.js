import React from 'react';

const Footer = () => {

    return (
      <footer className="fixed-bottom bg-dark d-flex justify-content-between flex-md-row">
        <p className="text-secondary">
        React Portfolio by Vick Phat | (216)-630-2006     
        </p>
  
        <div className="d-flex footer">
  
          <a className=" mx-2" href='mailto:vickphat@gmail.com'>
            <h1><i className="bi bi-envelope-fill"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 mx-2" href="https://github.com/vickphat"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-github"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 mx-2" href="https://www.linkedin.com/in/vicheka-phat-9a569a98/"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-linkedin"></i></h1> 
          </a>
  
  
        </div>
  
      </footer>
    )
  }
  
  export default Footer;



