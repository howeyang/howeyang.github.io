import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import ReactPlayer from "react-player";
import "react-awesome-slider/dist/styles.css";

class ReelSandboxParticle extends Component {
  render() {
    return (
        <AwesomeSlider>
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

        
      </AwesomeSlider>
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