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
        <Fade duration={2000}>
          <div className="white1">
            Project: <span> React JS</span> July 2019
          </div>
          <p className="black3">
            <label className="blackbutton">
              Single Page Application Resume Page
            </label>
          </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <p className="black3">
                <label className="blackbutton">Web Dev Journey</label>
              </p>
              <p className="section">
                <label>HTML and CSS beginnings</label> <br />
                My introduction to website development was during my 3rd year at
                Waterloo in a UI design course. I learned about the basic DOM
                structure, Gesalt principles, how to use HTML, Canvas and CSS to
                create a website. After graduating, I built a very sad website
                from scratch in HTML and Bootstrap CSS. After a year and while
                working at Upsight, I upgraded my website from a Bootstrap
                template website and began to customize it, adding in a
                Javascript animation and my own CSS to polish it up. <br />
                Over time, I learnt how to better utilize CSS into a website,
                how to build with responsive / mobile layout in mind and improve
                my understanding of website aesthetics.
                <br />
                <label>React</label> <br />
                In 2019, I was thinking about what my next step was going to be
                and I took a look at possible Web Development and UI design
                careers. I decided to pick up React as it seemed like the most
                HTML like, had an interesting component behaviour and a lot of
                active support. I created my first application based off some
                Basketball Stats API. It wasn't too bad and I experimented
                deploying to cloud hosting like Heroku and Firebase. You can
                check it out here : <br />{" "}
                <a
                  className="custom_button"
                  href="https://howeyang-nba.firebaseapp.com/#/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://howeyang-nba.firebaseapp.com/
                </a>
                <br />
                <label>Current</label> <br />I have matured a lot as a developer
                and have become more familiar with web development. Now when I
                design a website, I plan ahead for responsive design and layout,
                performance and consistent colouring theme. I try to leverage
                white space, simplify navigation and include transitions to make
                the user experience as enjoyable as possible.
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={300}>
              <p className="black3">
                <label className="blackbutton">React Components</label>
              </p>
              <p className="section">
                <a
                  className="custom_button reactpad"
                  href="https://material-ui.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Material UI
                </a>
                <a
                  className="custom_button reactpad"
                  href="https://www.react-reveal.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  React-Reveal
                </a>

                <a
                  className="custom_button reactpad"
                  href="https://www.npmjs.com/package/react-router-dom"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  react-router-dom
                </a>
                <br></br>
                <a
                  className="custom_button reactpad"
                  href="https://www.npmjs.com/package/react-responsive-carousel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  react-responsive-carousel
                </a>
                <a
                  className="custom_button reactpad"
                  href="https://www.npmjs.com/package/react-player"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  react-player
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
