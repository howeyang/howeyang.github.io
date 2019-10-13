import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class CardSandbox extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project/ProjectSandbox");
  }

  render() {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <div className="hvr-sweep-to-right2">
          <div className="hvr-sweep-to-right sandbox">
            <div className="hvr-sweep-to-right3">
              <Fade  delay={this.props.delay}>
                <Card className="glow">
                  <CardActionArea
                    onClick={this.redirect}
                    className="card-highlight"
                  >
                    <CardMedia
                      className="card"
                      image={require("../Images/card/card-sandbox.png")}
                      title="Smashing rocks together~"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom={false}
                        variant="h5"
                        component="h3"
                        className="whiteheader"
                      >
                        Prototyping & Sandboxing
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        component="p"
                      >
                        <label>Unity3D | Particles | Shaders</label>
                        <span className="whitefont">
                          Various special effects and prototypes : Original and
                          reverse engineered ideas
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Fade>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default withRouter(CardSandbox);
