import React, { Component } from "react";
import ReactPlayer from "react-player";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class ReelAutoBattle extends Component {
  render() {
    return (
      <Slider>
        <div>
          <img src="./Autobattle/static-autobattle3.png" width="100%" height="auto" alt="" />
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
      </Slider>
    );
  }
}

export default ReelAutoBattle;
