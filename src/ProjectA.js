import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class ProjectA extends Component {
  render() {
    return (
      <div>
        <div className="white1"> Project Title</div>
        <Grid container direction="row" justify="center" alignItems="stretch"> 
        <Grid item xs={12} sm={6} md={6}>
          <div className="black2"> Sample Title</div>

          <p className="section">
            Terry Crews' philosophy: Discipline is training, not punishment.
            Motivation is fleeting. You don't need it to start. Actually,
            motivation follows action. Avoid temptations when you catch them as
            such. But when you give into those temptations, remember to forgive
            yourself such that you can go at it again. Do reward yourself. Watch
            any sports movie, they train hard and they do party hard. I
            personally have revamped my wardrobe, got a new phone, buy fancy
            shoes, etc.
          </p>
        </Grid>

        <Grid item xs={12} sm={6} md={6} className="overlay2">
          <div className="white2"> Section2</div>
          <p className="section">
            Terry Crews' philosophy: Discipline is training, not punishment.
            Motivation is fleeting. You don't need it to start. Actually,
            motivation follows action. Avoid temptations when you catch them as
            such. But when you give into those temptations, remember to forgive
            yourself such that you can go at it again. Do reward yourself. Watch
            any sports movie, they train hard and they do party hard. I
            personally have revamped my wardrobe, got a new phone, buy fancy
            shoes, etc.
          </p>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectA;
