import React, { Component } from "react";
import ReactPlayer from "react-player";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class ReelSandboxParticle extends Component {
  render() {
    return (
        <Slider>
        <div>
          <ReactPlayer
            url="./Sandbox/particles.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Unity Particle System</p>
        </div>

        <div>
        <ReactPlayer
            url="./Sandbox/particles.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Unity Particle System</p>
        </div>

        
      </Slider>
    );
  }
}

export default ReelSandboxParticle;

/*
 <ReactPlayer
            url="./Sandbox/particles.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          */