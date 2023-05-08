import "../index.css";
import Project from "./ProjectCode";

const Projects = () => {
  return (
    <>
      <section className="projects-section" id="portfolio">
        <div className="col-lg-12 text-center">
          <h1 id="title">Projects I've worked on</h1>
        </div>
        <div className="projects-container">
          <Project
            photo={
              <img
                src="https://i.gyazo.com/1994c6b178a10e2d03fceffb8b23618a.jpg"
                alt="Rankriddler"
              />
            }
            name="Rank Riddler"
            link="https://github.com/Chris5613/RankRiddler"
            text="RankRiddler is a web based game where you can test your knowledge of a chosen game, After being shown a clip of
            a player, you will be asked to guess the rank of the player. The site host a leaderboard and point system to keep track of your score and rank 
            among other players."
            tech1="MongoDB"
            tech2="Express"
            tech3="React"
            tech4="Node"
            live="https://www.rankriddler.com/"
          />
          <Project
            photo={
              <img
                src="https://i.gyazo.com/c4a1067650459568eb1a88484be6a4bc.png"
                alt="gamerconnect"
              />
            }
            name="Gamerconnect"
            link="https://gitlab.com/gamerconnect/module3-project-gamma"
            text="Gamerconnect is a full stack web application that allows gamers to connect with other gamers.
              It allowes for users to create a profile, create posts, and add comments with full C.R.U.D functionality."
            tech1="React"
            tech2="FastAPI"
            tech3="Postgres"
            live="https://gamerconnect.gitlab.io/module3-project-gamma/"
          />
          <Project
            photo={
              <img
                src="https://i.gyazo.com/38e782eb76e15420fa75d86a15444fff.png"
                alt="Advice App"
              />
            }
            name="Advice Generator"
            link="https://github.com/Chris5613/advice-generator"
            text="Advice Generator is a web application that uses a 3rd Party API that will generate a random advice 
              that can be used to help you with your day. "
            tech1="React"
            tech2=" "
            tech3=" "
            live="https://www.christianwu.dev/advice-generator/"
          />
        </div>
        <div className="divider">
          <a
            href="https://github.com/Chris5613"
            rel="noreferrer"
            target="_blank"
          >
            <p>SEE MORE PROJECTS</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
