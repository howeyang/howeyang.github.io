import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import ReactPlayer from "react-player";
import "react-awesome-slider/dist/styles.css";

class ReelAutoBattle extends Component {
  render() {
    return (
      <AwesomeSlider>
        <div>
          <img src="./Autobattle/static-autobattle3.png" alt="" />
          <p className="highz">Battle Grid</p>
        </div>

        <div>
          <img src="./Autobattle/static-autobattle1.jpg" alt="" />
          <p className="highz">Card Creation</p>
        </div>

        <div>
          <ReactPlayer
            url="./Autobattle/gif-autobattle1.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Early Unit Select</p>
        </div>

        <div>
          <ReactPlayer
            url="./Autobattle/gif-autobattle2.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Initial AI</p>
        </div>

        <div>
          <ReactPlayer
            url="./Autobattle/gif-autobattle3.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Animation + AI</p>
        </div>

        <div>
          <ReactPlayer
            url="./Autobattle/gif-autobattle4.gif.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            loop={true}
            muted={true}
          />
          <p className="highz">Early MVP</p>
        </div>
      </AwesomeSlider>
    );
  }
}

export default ReelAutoBattle;
