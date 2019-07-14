import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

class CardA extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project/ProjectAutobattler");
  }

  render() {
    return (
      <Grid item xs={12} sm={3} md={3} >
        <div className="hvr-sweep-to-right2">
          <div className="hvr-sweep-to-right autobattler">
            <div className="hvr-sweep-to-right3">
              <Card >
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("./autobattler.png")}
                    title="1 Star, 2 Star, 3 Star!"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="black2">
                      Project: Auto battler
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                    <label>Unity3D | Procedural | AI | Pathfinding</label>
                    <span>
                      This project was inspired by DOTA Autochess and a challenge to myself to build out a similar battle system.
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default withRouter(CardA);
