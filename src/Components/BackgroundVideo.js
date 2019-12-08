import React, { Component } from "react";

class BackgroundVideo extends Component {

  render() {
    return (
      <video loop muted autoPlay poster="black" className="fullscreen-bg">
        <source src="target2.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default BackgroundVideo;
