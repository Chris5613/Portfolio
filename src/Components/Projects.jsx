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
                src="https://i.gyazo.com/54aa762b4429ce35b46c0554e5e89e46.jpg"
                alt="Rankriddler"
                width={600}
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
                src="https://i.gyazo.com/a440aa94ad80d6f06d614d492b0c2e1c.png"
                alt="gamerconnect"
                width={600}
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
