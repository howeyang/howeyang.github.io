import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Fade from "react-reveal/Fade";
import AutoBattleCarousel from "./AutoBattleCarousel";

class ProjectAutoBattler extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            Project: <a>Auto Battler</a>{" "}
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black3"> Introduction</div>
            </Fade>
            <Fade left>
              <p className="section">
                <label>The Prompt</label> <br />
                Around January 2019, I started playing a custom game mode in
                Dota 2 that was taking the gaming community by storm, Dota
                Autochess by Studio Drodo. The game mode itself was inspired by
                older custom games: Pokemon TD from Warcraft3 and Casino TD from
                Starcraft 2. When playing the game, I was inspired to create a
                single-player spin on the game. Thus, I got to work to paper
                prototyping and began to bring my vision to life in Unity.
                <br /> <label>The Project Goal</label> <br />
                My Project was to create a Minimal Viable Product that would
                contain the core features : autonomous combat, unit placement
                and combination. From there, add enough polish it to the point
                where I could be proud of it.
                <br /> <label>Summary</label> <br />I learned a lot from this
                project: coding Combat AI and pathfinding, using Unity's Mecanim
                Animation System, placing Environmental assets and all the small
                things that contribute to polish.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
            <Fade>
              <div className="black3">
                {" "}
                Latest version <a>On haitus</a>
              </div>
            </Fade>
            <Fade right>
              <div className="section">
                <ReactPlayer
                  url="autobattle.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black3">Challenges and Components</div>
            </Fade>
            <Fade left>
              <p className="section">
                <label>Building the board</label> <br />
                The board / grid in which the player's units and enemy control
                units fight on was a big challenge to tackle. I started with a
                naive String Array implementation with the intention of storing
                their placement but I quickly felt it's limitations.
                <br /> To gain more functionality, I created a Node struct and
                began to build a grid of Nodes. The Node data structure allowed
                me to store data, hold references to their neighbours and able
                to do simple heuristic pathing to other nodes via the A*
                Algorithim.
                <br />
                <label>Creating AI and Autonomous combat</label> <br />
                Creating the AI for the game meant building a modular script
                that could run independantly in each game unit. Performance and
                synchronous combat was a big concern for me. This lead me to
                coding the AI script with no Update logic. Instead, all units
                relied on the board script to invoke a Stepping function which
                make it run through it's logic. The downside of this was
                creating a tight coupling between the board and all units. The
                upside of this was significantly reduced performance concerns
                and allowed a sequential resolution of action and behaviours.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
            <Fade>
              <div className="black3">Development Snapshots</div>
            </Fade>
            <Fade right>
              <AutoBattleCarousel />
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black3">Lessons Learned</div>
            </Fade>
            <Fade left>
              <p className="section">
                <label>Over Designing</label> <br />
                I often kept going back to paper prototyping certain features /
                concepts. Although this invigorated myself to keep working at
                this project, very few of what I designed and thought of made it
                into the prototype build. My lack of focus on and over designing
                non-essential features wasted a lot of time and brain power.
                <br /> <label>Too Tight Coupling</label> <br />
                This sucked
                <br /> <label>Monolithic or Tiny</label> <br />
                Moderation or finding the right balance is something that I will
                try to work towards.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
          <Fade>
            <div className="black3"> Future Considerations</div>
            </Fade>
            <Fade right>
            <p className="section">
              This project was probably the most feature complete and playable
              game I built since university. It was a good exercise for
              planning, coding and execution. Quick code prototyping definitely
              helps to put something together but it is necessary to identify
              what code should be generic, flexible and readable and re-write
              the code. Hopefully, I can apply what I learned here to future
              projects!
              <br />
              <label>Thank you for reading!</label>
            </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectAutoBattler;
