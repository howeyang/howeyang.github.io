import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//https://www.npmjs.com/package/react-responsive-carousel
class AutoBattleCarousel extends Component {
  render() {
    return (
      <Carousel dynamicHeight={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true}>
        <div>
          <img src="./static-autobattle3.png" />
          <p className="legend">Battle Grid</p>
        </div>
        <div>
          <img src="./static-autobattle1.jpg" />
          <p className="legend">Card Creation</p>
        </div>
        <div>
          <img src="./static-autobattle2.jpg" />
          <p className="legend">Reward Menu</p>
        </div>

        <div>
          <img src="./gif-autobattle1.gif" />
          <p className="legend">Early Unit Select</p>
        </div>
        <div>
          <img src="./gif-autobattle2.gif" />
          <p className="legend">Initial AI</p>
        </div>
        <div>
          <img src="./gif-autobattle3.gif" />
          <p className="legend">Animation + AI</p>
        </div>
        <div>
          <img src="./gif-autobattle4.gif" />
          <p className="legend">Early MVP</p>
        </div>
      </Carousel>
    );
  }
}

export default AutoBattleCarousel;
