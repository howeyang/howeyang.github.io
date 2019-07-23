import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class ProjectReact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            ReactJS
            <a />{" "}
          </div>
          <div className="white2">
            {" "}
            Single Page Application as a Resume Website
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
              <div className="black3">My Journey to React</div>
              <p className="section">
              <label>HTML and CSS beginnings</label> <br></br>
                My introduction to websites was during my 3rd year at Waterloo in a UI design course. I learned about Gesalt principles, how to rudimentarily use HTML, Canvas and CSS to create a website. After graduating, I built a very sad website from scratch in HTML and Bootstrap CSS. After a year and while working at Upsight, I upgraded my website from a Bootstrap template website and began to customize it, adding in a Javascript animation and my own CSS to polish it up. <br></br>
                Over time, I learnt how to better utilize CSS into a
                website, how to build with responsive / mobile layout in mind
                and improve my understanding of website aesthetics.<br />
                <label>React</label> <br></br>
                In 2019, I was thinking about what my next step was going to
                be and I took a hard look at Web Development and UI design careers.
                The two Web development languages that caught my eye were Angular and React. <br></br>
                After trying both out, it was much easier to use React especially due to it's popularity, modularity and similarity to HTML.
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
              <div className="black3">Componenets Used</div>
              <p className="section">
                <a
                  className="custom_button"
                  href="https://material-ui.com/"
                  target="_blank"
                >
                  Material UI{" "}
                </a>{" "}
                {"   "}
                <a
                  className="custom_button"
                  href="https://www.react-reveal.com/"
                  target="_blank"
                >
                  React-Reveal{" "}
                </a>
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectReact;
