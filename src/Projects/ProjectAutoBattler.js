import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Fade from "react-reveal/Fade";
import ReelAutoBattle from "../Reels/ReelAutoBattle";

class ProjectAutoBattler extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade duration={2000}>
          <div className="white1">
            Project: <span>Auto Battler</span> April 2019
          </div>
        </Fade>
        <Fade delay={200} bottom>
          <p className="black3">
            <label className="blackbutton">Single Player Auto Battler</label>
          </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <p className="black3">
                <label className="blackbutton">Summary</label>
              </p>
            </Fade>
            <Fade>
              <p className="section">
                <label>A Refined Prototype</label> <br />
                The goal of this project was to go beyond a simple game
                prototype and use this opporunity to add a lot of polish and
                features to a prototype.
                <br /> <label>Part 1 : The Core Game Play</label> <br />
                The Core Game was straightforward in implementation and needed
                to meet the following functionality :
                <ul className="list">
                  <li>
                    ● Units will automatically find enemies, path to them and
                    attack if possible
                  </li>
                  <li>
                    <span>[ Node Grid System, A* Algorithim, AI Agents ]</span>
                  </li>
                  <li>
                    ● Ability to move, upgrade, add or remove units on the Board
                    or bench
                  </li>
                  <li>
                    <span>
                      [ Ray cast input detection and resolution, Switch case
                      controller ]
                    </span>
                  </li>
                  <li>
                    ● Having a Buying / Reward Mechanism as well as Unit Info
                    Panel
                  </li>
                  <li>
                    <span>
                      [ Prefab Instantiation, Generic UI Element Mapping and
                      Updates ]
                    </span>
                  </li>
                </ul>
                <label>Part 2 : The Polish</label> <br />
                Although "polish" is never critical to the functionality to a
                game, it was often something I never worked on. This was a big
                learning curve for me and I'm glad I learned a lot while working
                on the following features :<br></br>
                <ul className="list">
                  <li>
                    ● Unity's Mecanim Animation State System, how to hook into
                    it and use it
                  </li>
                  <li>
                    <span>[ Mecanim System, Animation Controller ]</span>
                  </li>
                  <li>
                    ● Building a clean UI for legiability and functionality
                  </li>
                  <li>
                    <span>[ Unity Canvas, Text Mesh Pro, Anchoring ]</span>
                  </li>
                  <li>
                    ● Having an Introduction transition scene into Core Game
                    loop
                  </li>
                  <li>
                    <span>[ Camera Interpolation, Environment Design ]</span>
                  </li>
                  <li>
                    ● Creating Materials, Particle Effects and using 3rd Party
                    assets for Models and Environments
                  </li>
                </ul>
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
            <Fade>
              <p className="black3">
                <label className="blackbutton">Gameplay</label>
              </p>
            </Fade>
            <Fade delay={300}>
              <div className="section">
                <ReactPlayer
                  url="./Autobattle/autobattle.mp4"
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
              <p className="black3">
                <label className="blackbutton">Introduction</label>
              </p>
            </Fade>
            <Fade>
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

          <Grid item xs={12} sm={6} md={6}>
            <p className="black3">
              <label className="blackbutton">
                Challenges and what went Right
              </label>
            </p>
            <Fade>
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
                make it run through it's logic and trigger a Mecanim State
                transitions. The downside of this was creating a tight coupling
                between the board and all units. The upside of this was
                significantly reduced performance concerns and allowed a
                sequential resolution of action and behaviours.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
            <Fade>
              <p className="black3">
                <label className="blackbutton">Development Snapshots</label>
              </p>
            </Fade>
            <Fade delay={300}>
              <div className="section">
                <ReelAutoBattle />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <p className="black3">
                <label className="blackbutton">Lessons Learned</label>
              </p>
            </Fade>
            <Fade>
              <p className="section">
                <label>Non-essential Designing</label> <br />
                I often kept going back to paper prototyping unnecessary
                features / concepts. Although this pushed myself to keep
                working, very few of those designs and made it into the
                prototype build. My lack of focus on and over designing
                non-essential features wasted a lot of time and effort.
                <br /> <label>Too Tight Coupling</label> <br />
                After coding and adding functionality to the game, I would often
                move onto another component or section of the game. If I ever
                had to return to the previous component, it became difficult to
                add or adjust the code due to how many components that need to
                be adjusted.
                <br /> <label>Monolithic or Tiny</label> <br />
                In an effort to avoid coupling, I tried making more monolithic
                code scripts but that became difficult to read and iterate on.
                However, if I made the code small, it became too tightly coupled
                or too many references, which also made it difficult to understand and iterate on.
                Finding a good balance is something I need to work on going forwards!
                <br />{" "}
                <label>
                  Transition from Prototype code to Better code
                </label>{" "}
                <br />
                When I coded the AI for the units, I created a prototype naive approach
                for it's Agent logic. It would determine if there were any nearby
                enemies and if true, attack. Otherwise, it would try to path to the nearest enemy.
                In summary, it was a bit of a long IF ELSE statement and
                difficult to built additional functionality. For the future,
                after coding functionality and liking the functionality, it is
                definitely important to take the time to clean up, organize and
                improve code for future use.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
            <Fade>
              <p className="black3">
                <label className="blackbutton">Going Forward!</label>
              </p>
            </Fade>
            <Fade delay={300}>
              <p className="section">
                This project was probably the most feature complete and playable
                game I built since university. It was a good exercise for
                planning, coding and execution. Quick code prototyping
                definitely helps to put something together but it is necessary
                to identify what code should be generic, flexible and readable
                and re-write the code. Hopefully, I can apply what I learned
                here to future projects!
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectAutoBattler;
