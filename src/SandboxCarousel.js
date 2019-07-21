import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//https://www.npmjs.com/package/react-responsive-carousel
class SandboxCarousel extends Component {
  render() {
    return (
      <Carousel dynamicHeight={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true}>
        <div>
          <img src="./Sandbox/ps4_wave_experiment2.gif" />
          <p className="legend">Scrolling Texture</p>
        </div>
        <div>
          <img src="./Sandbox/ps4_wave_experiment.gif" />
          <p className="legend">Mesh distortion</p>
        </div>
      </Carousel>
    );
  }
}

export default SandboxCarousel;
