import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="white1 underline">
          {" "}
          Contact Me<a> Under construction</a>{" "}
        </div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <p className="section">
            You can reach me at howechyang@gmail.com or visit me at my github at https://github.com/howeyang
          </p>
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
