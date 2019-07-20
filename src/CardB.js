import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from 'react-reveal/Fade';
class CardB extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project/ProjectAutobattler");
  }

  render() {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <div className="hvr-sweep-to-right2">
          <div className="hvr-sweep-to-right autobattler">
            <div className="hvr-sweep-to-right3">
            <Fade up delay={300} duration={1100}>
              <Card className="glow">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("./card/card-autobattler.png")}
                    title="1 Star, 2 Star, 3 Star!"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="h6"
                      component="h3"
                      className="black2"
                    >
                      Project: Auto battler
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                      <label>Unity3D | Procedural | AI | Pathfinding</label>
                      <span>
                        A single player take on the Auto battler genre: feature complete and playable.
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

export default withRouter(CardB);
