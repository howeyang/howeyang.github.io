import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";

//https://www.npmjs.com/package/react-responsive-carousel
class ReelSandboxShader extends Component {
    render() {
        return (
          <Slider infinite={true} duration={1000}>
            <div>
              <ReactPlayer
                url="./Sandbox/shader_pbr.gif.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                loop={true}
                muted={true}
              />
              <p className="highz">Unity HD Render Pipeline Shader Graph</p>
            </div>
    
            <div>
              <ReactPlayer
                url="./Sandbox/shader_node.gif.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                loop={true}
                muted={true}
              />
              <p className="highz">Unity Shader Graph</p>
            </div>
            <div>
              <ReactPlayer
                url="./Sandbox/shader_smear.gif.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                loop={true}
                muted={true}
              />
              <p className="highz">Smear Effect Script Via Frame Caching</p>
            </div>
          </Slider>
        );
      }
    }

export default ReelSandboxShader;
