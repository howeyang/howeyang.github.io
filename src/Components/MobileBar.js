import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

//Holy crap i built something Snazzy!!! woooo

class MobileBar extends Component {
  constructor(props) {
    super();

    this.state = {
      active: false,
      menutext: "Menu",
    };
    this.handleClick = this.handleClick.bind(this);
    this.redirectProject = this.redirectProject.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.redirectAbout = this.redirectAbout.bind(this);
    this.redirectContact = this.redirectContact.bind(this);
    this.redirectCozy = this.redirectCozy.bind(this);
    this.redirectBattle = this.redirectBattle.bind(this);
    this.redirectBoss = this.redirectBoss.bind(this);
  }

  redirectHome() {
    this.props.history.push("/");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  redirectAbout() {
    this.props.history.push("/Work");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  redirectProject() {
    this.props.history.push("/Personal");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  redirectContact() {
    this.props.history.push("/Resume");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  redirectCozy() {
    this.props.history.push("/CozyCafe");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  redirectBattle() {
    this.props.history.push("/BattleRun");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  redirectBoss() {
    this.props.history.push("/BeatBoss4");
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  //Clicks
  handleClick() {
    this.setState((state) => ({
      active: !state.active,
    }));
  }

  render() {
    return (
      <div>
        <ul className="header visiblenav centerText" key={100 + this.state.active}>
          <li>
            <a
              className={
                this.state.active ? "menubutton active closemenu centerText" : "menubutton centerText"
              }
              onClick={this.handleClick}
            >
              {this.state.active ? "Close" : "Menu"}
            </a>
          </li>
          <Fade
            collapse
            when={this.state.active}
            duration={100}
            key={1 + this.state.active}
          >
            <ul
              className={
                this.state.active ? "header top2 visiblenav centerText" : "hidden"
              }
            >
              <li>
                <a
                  className={this.state.active ? "menubutton active centerText" : "hidden"}
                  onClick={this.redirectHome}
                >
                  Home
                </a>
              </li>
            </ul>
          </Fade>

          <Fade
            collapse
            when={this.state.active}
            duration={300}
            key={2 + this.state.active}
          >
            <ul
              className={
                this.state.active ? "header top4 visiblenav centerText" : "hidden"
              }
            >
              <li>
                <a
                  className={this.state.active ? "menubutton active" : "hidden"}
                  onClick={this.redirectProject}
                >
                  Personal Projects
                </a>
              </li>
            </ul>
          </Fade>

          <Fade
            collapse
            when={this.state.active}
            duration={600}
            key={3 + this.state.active}
          >
            <ul
              className={
                this.state.active ? "header top3 visiblenav centerText" : "hidden"
              }
            >
              <li>
                <a
                  className={this.state.active ? "menubutton active" : "hidden"}
                  onClick={this.redirectAbout}
                >
                  Work Experience
                </a>
              </li>
            </ul>
          </Fade>

          <Fade
            collapse
            when={this.state.active}
            duration={900}
            key={4 + this.state.active}
          >
            <ul
              className={
                this.state.active ? "header top5 visiblenav centerText" : "hidden"
              }
            >
              <li>
                <a
                  className={this.state.active ? "menubutton active" : "hidden"}
                  onClick={this.redirectCozy}
                >
                  Work - Cozy Cafe
                </a>
              </li>
            </ul>
          </Fade>

          <Fade
            collapse
            when={this.state.active}
            duration={900}
            key={5 + this.state.active}
          >
            <ul
              className={
                this.state.active ? "header top6 visiblenav centerText" : "hidden"
              }
            >
              <li>
                <a
                  className={this.state.active ? "menubutton active" : "hidden"}
                  onClick={this.redirectBattle}
                >
                  Work - Battle Run
                </a>
              </li>
            </ul>
          </Fade>

          <Fade
            collapse
            when={this.state.active}
            duration={900}
            key={6 + this.state.active}
          >
            <ul
              className={
                this.state.active ? "header top7 visiblenav centerText" : "hidden"
              }
            >
              <li>
                <a
                  className={this.state.active ? "menubutton active" : "hidden"}
                  onClick={this.redirectBoss}
                >
                  Work - Beat the Boss 4
                </a>
              </li>
            </ul>
          </Fade>
        </ul>
      </div>
    );
  }
}

export default withRouter(MobileBar);
