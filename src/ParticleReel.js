import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//https://www.npmjs.com/package/react-responsive-carousel
class ParticleReel extends Component {
  render() {
    return (
      <Carousel dynamicHeight={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true}>
        <div>
          <img src="./Sandbox/particles.gif" />
          <p className="legend">Unity Particle System</p>
        </div>
      </Carousel>
    );
  }
}

export default ParticleReel;
