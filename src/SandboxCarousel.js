import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import ReactPlayer from "react-player";
import "react-awesome-slider/dist/styles.css";

//https://www.npmjs.com/package/react-responsive-carousel
class SandboxCarousel extends Component {
  render() {
    return (
      <AwesomeSlider>
        <div>
          <ReactPlayer
            url="./Sandbox/ps4_wave_experiment2.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Scrolling Texture</p>
        </div>

        <div>
          <ReactPlayer
            url="./Sandbox/ps4_wave_experiment.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Mesh Distortion</p>
        </div>
      </AwesomeSlider>
    );
  }
}

export default SandboxCarousel;
/* <div data-src="./Sandbox/ps4_wave_experiment.gif.mp4"  allowfullscreen loop="true" autoplay="autoplay" controls="controls" id="vid" muted type="video/mp4">

<div> <video src="./Sandbox/ps4_wave_experiment.gif.mp4"  loop="loop" autoPlay="autoPlay"  controls id="vid" muted type="video/mp4" />
        <p className="highz">Mesh Distortion </p>
        </div>

*/
