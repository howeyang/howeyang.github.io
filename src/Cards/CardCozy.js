import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class CardCozy extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/CozyCafe");
  }

  render() {
    return (
      <div className="hvr-sweep-to-right2">
        <div className="hvr-sweep-to-right sandbox">
          <div className="hvr-sweep-to-right3">
            <Fade delay={this.props.delay}>
              <Card className="glow cardBackground">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("../Images/card/card-cozy.png")}
                    title="Irasshaimase!"
                  />

                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="h3"
                      component="h3"
                      className="cardHeader"
                    >
                      Cozy Cafe
                    </Typography>
                    <Typography
                      variant="body1"
                      color=""
                      component="p"
                      className="cardMinHeight"
                    >
                      <label2>Unity3D | Idle Mobile Game </label2>
                      <div className="secondaryText">
                        Role: Producer and Developer<br></br>A comfy single
                        player idle mobile game.
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardCozy);
