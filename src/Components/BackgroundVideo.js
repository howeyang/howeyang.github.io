import React, { Component } from "react";

class BackgroundVideo extends Component {
/*
<video loop muted autoPlay className="fullscreen-bg">
        <source src="target2.mp4" type="video/mp4" />
      </video>
*/
  render() {
    return (
      <img className="fullscreen-bg" src="Temp_Assets/temp_wallpaper.png" ></img>
    );
  }
}

export default BackgroundVideo;
