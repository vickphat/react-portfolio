import { auto } from '@popperjs/core';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import PlaceHolder from '../images/paceholder.png';
import PasswordImg from '../images/password.jpg'
import QuestionImg from '../images/question2.jpg';
import WeatherImg from '../images/weather2.jpg';
import BudgetImg from '../images/budget.jpg';

const style = {
  maxWidth: "60%",
  maxHeight: auto,
  margin: auto
}


const Applications = () => {
  return (
    <div>
      <h3 className="text-center text-white">Click on image to redirect to deployed application</h3>
      <Carousel fade>
        <Carousel.Item>

          <a href="https://vickphat.github.io/password-generator/" target="blank">
            <img
              className="d-block w-100"
              src={PasswordImg}
              style={style}
              alt="Password Generator"
            />
          </a>

          <Carousel.Caption>
            <div className="text-white w-50">
             <h3>Password Generator</h3>
           
            </div>          
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <a href="https://vickphat.github.io/weather-dash/" target="blank">
            <img
              className="d-block w-100"
              src={WeatherImg}
              style={style}
              alt="Second slide"
            />
          </a>

          <Carousel.Caption>
          <div className="text-white w-50">
            <h3>Weather Dashboard</h3>
          
            </div>       
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://vickphat.github.io/javascript-time-attack/" target="blank">
            <img
              className="d-block w-100"
              src={QuestionImg}
              style={style}
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
          <div className="text-white w-50">
            <h3>JavaScript Quiz</h3>
          
            </div>            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://fierce-coast-62825.herokuapp.com/" target="blank">
            <img
              className="d-block w-100"
              src={BudgetImg}
              style={style}
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
          <div className="text-white w-50">
             <h3>Budget Tracker</h3>
          
            </div> 
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>


  )
}

export default Applications;