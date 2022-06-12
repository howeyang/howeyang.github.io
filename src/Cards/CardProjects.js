import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class CardProjects extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project");
  }

  render() {
    return (
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
                      image={require("../Images/fire_end.gif")}
                      title="Smashing rocks together~"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom={false}
                        variant="h5"
                        component="h3"
                        className="whiteheader"
                      >
                        Projects & Case Studies
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        component="p"
                      >
                        <label>Unity3D | Scripts | Shaders</label>
                        <span className="whitefont">
                          Showcasing personal projects built mainly in Unity!
                          
                        </span>
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

export default withRouter(CardProjects);
