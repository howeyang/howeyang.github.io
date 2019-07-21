import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//https://www.npmjs.com/package/react-responsive-carousel
class ShaderReel extends Component {
  render() {
    return (
      <Carousel dynamicHeight={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true}>
        <div>
          <img src="./Sandbox/shader_pbr.gif" />
          <p className="legend">Unity HD Render Pipeline Shader Graph</p>
        </div>
        <div>
          <img src="./Sandbox/shader_node.gif" />
          <p className="legend">Unity Shader Graph</p>
        </div>
        <div>
          <img src="./Sandbox/shader_smear.gif" />
          <p className="legend">Smear Effect Script Via Frame Caching</p>
        </div>
      </Carousel>
    );
  }
}

export default ShaderReel;
