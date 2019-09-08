import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";

//https://www.npmjs.com/package/react-responsive-carousel
class ReelSandboxWave extends Component {
  render() {
    return (
      <Slider infinite={true} duration={1000}>
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
      </Slider>
    );
  }
}

export default ReelSandboxWave;
/* <div data-src="./Sandbox/ps4_wave_experiment.gif.mp4"  allowfullscreen loop="true" autoplay="autoplay" controls="controls" id="vid" muted type="video/mp4">

<div> <video src="./Sandbox/ps4_wave_experiment.gif.mp4"  loop="loop" autoPlay="autoPlay"  controls id="vid" muted type="video/mp4" />
        <p className="highz">Mesh Distortion </p>
        </div>

*/
