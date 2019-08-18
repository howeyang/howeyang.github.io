import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import ReactPlayer from "react-player";
import "react-awesome-slider/dist/styles.css";

//https://www.npmjs.com/package/react-responsive-carousel
class ReelSandboxShader extends Component {
    render() {
        return (
          <AwesomeSlider>
            <div>
              <ReactPlayer
                url="./Sandbox/shader_pbr.gif.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing={true}
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
                url="./Sandbox/shader_node.gif.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                loop={true}
                muted={true}
              />
              <p className="highz">Smear Effect Script Via Frame Caching</p>
            </div>
          </AwesomeSlider>
        );
      }
    }

export default ReelSandboxShader;
