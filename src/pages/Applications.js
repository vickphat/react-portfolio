import { auto } from '@popperjs/core';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import PlaceHolder from '../images/paceholder.png';
import PasswordImg from '../images/password.jpg'
import QuestionImg from '../images/question2.jpg';
import WeatherImg from '../images/weather2.jpg';

const style = {
  maxWidth: "60%",
  maxHeight: auto,
  margin: auto
}


const Applications = () => {
  return (

    <Carousel fade>
      <Carousel.Item>

        <a href="https://vickphat.github.io/password-generator/" target="blank">
          <img
            className="imageLink d-block w-100"
            src={PasswordImg}
            style={style}
            alt="First slide"
          />
        </a>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WeatherImg}
          style={style}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={QuestionImg}
          style={style}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default Applications;