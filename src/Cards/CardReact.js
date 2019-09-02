import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from 'react-reveal/Fade';

class CardReact extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project/ProjectReact");
  }

  render() {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <div className="hvr-sweep-to-right2">
          <div className="hvr-sweep-to-right react">
            <div className="hvr-sweep-to-right3">
            <Fade delay={600} >
              <Card className="glow">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("../Images/card/card-react.png")}
                    title="npm install react :)"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="h6"
                      component="h3"
                      className="black2"
                    >
                      React JS
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                      <label>ReactJS |  React Components | CSS </label>
                      <span>
                        A Single Page Application built with React and various components.
                         
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

export default withRouter(CardReact);
