import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

//https://www.npmjs.com/package/react-responsive-carousel
class SandboxCarousel extends Component {
  render() {
    return (
      <AwesomeSlider >
        <div data-src="./Sandbox/ps4_wave_experiment2.gif.mp4"  allowfullscreen loop="true" autoplay="autoplay" controls="controls" id="vid" muted type="video/mp4">
        <p className="highz">Scrolling Texture</p>
        </div>
        
        <div data-src="./Sandbox/ps4_wave_experiment.gif.mp4"  allowfullscreen loop="true" autoplay="autoplay" controls="controls" id="vid" muted type="video/mp4">
        
        <p className="highz">Mesh Distortion </p>
        </div>
      </AwesomeSlider>
    );
  }
}

export default SandboxCarousel;
