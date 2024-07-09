import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class CardBeach extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/PageBeach");
  }

  render() {
    return (
      <div className="hvr-sweep-to-right2">
        <div className="hvr-sweep-to-right sandbox">
          <div className="hvr-sweep-to-right3">
            
              <Card className="glow cardBackground">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("../Images/card/card-beach.png")}
                    title="Reverse Engineer!"
                  />

                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="h3"
                      component="h3"
                      className="cardHeader"
                    >
                      Wave Shader
                    </Typography>
                    <Typography
                      variant="body1"
                      color=""
                      component="p"
                      className="cardMinHeight"
                    >
                      <label2>Unity3D | Scripts | Shader HLSL </label2>
                      <div className="secondaryText">
                        Self research on how to create a stylized Water Shader
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
         
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardBeach);