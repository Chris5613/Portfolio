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
          <Project
            photo={
              <img
                src="https://i.gyazo.com/a0b31d8819d12cb12cb488611d1c8f30.png"
                alt="weather"
              />
            }
            name="Weather Tracker"
            text="Weather Tracker can be used to track the weather of any city, It sends a request to the OpenWeather API and
          returns the weather data for the city that was searched for."
            link="https://github.com/Chris5613/Weather-Tracker"
            tech1="React"
            tech2="Bootstrap"
            live="https://www.christianwu.dev/Weather-Tracker/"
          />
          <Project
            photo={
              <img
                src="https://i.gyazo.com/7d3d198901e62d58293d79e0618dde23.png"
                alt="User-auth"
              />
            }
            name="User Auth"
            link="https://github.com/Chris5613/User-Auth"
            text="Using the MERN stack, this is a application to show user authorization with JWT token. 
              The JWT tokens are kept in local storage, gets created when you login and deleted when logged out. "
            tech1="MongoDB"
            tech2="Express"
            tech3="React"
            tech4="Node"
            live="https://f-auth.onrender.com/"
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
