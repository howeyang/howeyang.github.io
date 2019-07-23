import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//https://www.npmjs.com/package/react-responsive-carousel
class AutoBattleCarousel extends Component {
  render() {
    return (
      <Carousel dynamicHeight={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true}>
        <div>
          <img src="./Autobattle/static-autobattle3.png" alt='' />
          <p className="legend">Battle Grid</p>
        </div>
        <div>
          <img src="./Autobattle/static-autobattle1.jpg" alt='' />
          <p className="legend">Card Creation</p>
        </div>
        <div>
          <img src="./Autobattle/static-autobattle2.jpg" alt='' />
          <p className="legend">Reward Menu</p>
        </div>

        <div>
          <img src="./Autobattle/gif-autobattle1.gif" alt='' />
          <p className="legend">Early Unit Select</p>
        </div>
        <div>
          <img src="./Autobattle/gif-autobattle2.gif"  alt=''/>
          <p className="legend">Initial AI</p>
        </div>
        <div>
          <img src="./Autobattle/gif-autobattle3.gif" alt='' />
          <p className="legend">Animation + AI</p>
        </div>
        <div>
          <img src="./Autobattle/gif-autobattle4.gif" alt=''/>
          <p className="legend">Early MVP</p>
        </div>
      </Carousel>
    );
  }
}

export default AutoBattleCarousel;
