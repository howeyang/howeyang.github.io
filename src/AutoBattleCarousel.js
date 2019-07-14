import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
//https://www.npmjs.com/package/react-responsive-carousel
class AutoBattleCarousel extends Component {
    render() {
        return (
            <Carousel dynamicHeight={true} infiniteLoop={true}>
                <div>
                    <img src="./color1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./color4.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./toast.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default AutoBattleCarousel;