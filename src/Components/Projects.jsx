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
          <div>
            <Project
              photo={
                <img
                  src="https://i.gyazo.com/c4a1067650459568eb1a88484be6a4bc.png"
                  alt="gamerconnect"
                />
              }
              name="Gamerconnect"
              link="https://gitlab.com/gamerconnect/module3-project-gamma"
              text="Gamerconnect is a web app that allows gamers who want to interact with other gamers so they can squad up and play a few games. 
          The web app allows for posting posts to the community. "
              tech1="React"
              tech2="FastAPI"
              tech3="Postgres"
              live="https://gamerconnect.gitlab.io/module3-project-gamma/"
            />
            <Project
              photo={
                <img
                  src="https://i.gyazo.com/0d3bc5983c24d8e650e7ab3f2d46a29e.jpg"
                  alt="weather"
                />
              }
              name="Weather Tracker"
              text="Weather Tracker is a web application that can be used to track the weather of any city, It sends a request to the OpenWeather API and
          returns the weather data for the city that was searched for."
              link="https://github.com/Chris5613/Weather-Tracker"
              tech1="React"
              live="https://www.christianwu.dev/Weather-Tracker/"
            />
          </div>
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
