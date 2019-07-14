import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

class CardB extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project/ProjectB");
  }

  render() {
    return (
        <Grid item xs={12} sm={3} md={3} >
        <div className="hvr-sweep-to-right2">
          <div className="hvr-sweep-to-right">
            <div className="hvr-sweep-to-right3">
              <Card >
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("./color13.png")}
                    title="1 Star, 2 Star, 3 Star!"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="black2">
                      Project: Dungeon Crawler
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                    <label>Unity3D | Procedural | AI | Modular</label>
                    <span>
                      This project was inspired by Archero and building upon from my previous experience to create a publishable product.
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

export default withRouter(CardB);
