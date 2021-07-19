import { auto } from '@popperjs/core';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import profile from '../images/profile2.jpg'

const style = {
    maxWidth: "20%",
    maxHeight: auto,
    margin: auto
}

const Applications = () => {
    return (

        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={profile}
      style={style}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={profile}
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
      src={profile}
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