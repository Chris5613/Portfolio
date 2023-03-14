import { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div>
          <h1 id="title">Tech Stack</h1>
        </div>
        <div className="skill-content">
          <h3>
            <u>Front End</u>
          </h3>
          <div className="front-end" data-aos="fade-right">
            <Icons
              icon={
                <img
                  src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png"
                  alt="html"
                  width={90}
                />
              }
              text="HTML"
            />
            <Icons
              icon={
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"
                  alt="css"
                  width={90}
                />
              }
              text="CSS"
            />
            <Icons
              icon={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="javascript"
                  width={95}
                />
              }
              text="Javascript"
            />
            <Icons
              icon={
                <img
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                  alt="react"
                  width={90}
                />
              }
              text="React"
            />
          </div>
          <h3>
            <u>Back End</u>
          </h3>
          <div className="back-end" data-aos="fade-right">
            <Icons
              icon={
                <img
                  src="https://framagit.org/uploads/-/system/project/avatar/28062/django.png"
                  alt="django"
                  width={90}
                />
              }
              text="Django"
            />
            <Icons
              icon={
                <img
                  src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
                  className="fastapi-icon"
                  alt="fastapi"
                  width={80}
                />
              }
              text="FastAPI"
            />
            <Icons
              icon={
                <img
                  src="https://i.gyazo.com/a9726507548eef637311b50621c9b5bf.png"
                  alt="postgres"
                  className="postgres-icon"
                  width={85}
                />
              }
              text="Postgres"
            />
            <Icons
              icon={
                <img
                  src="https://i.gyazo.com/f6ab376de47fb84be8fd030da6ee12ea.png"
                  alt="MongoDB"
                  width={100}
                />
              }
              text="MongoDB"
            />
          </div>
          <h3>
            <u>Misc / Tools</u>
          </h3>
          <div className="other" data-aos="fade-right">
            <Icons
              icon={
                <img
                  src="https://i.gyazo.com/9ae7d0c2a37c4626d2ea58f615906814.png"
                  alt="python"
                  width={100}
                />
              }
              text="Python"
            />
            <Icons
              icon={
                <img
                  src="https://i.gyazo.com/d1f5a6ff0643a45ca5b8803acb5ee649.png"
                  alt="Docker"
                  width={100}
                />
              }
              text="Docker"
            />
            <Icons
              icon={
                <img
                  src="https://i.gyazo.com/d416d97ea3ba2415880beeb355cb3a55.png"
                  alt="Git"
                  width={100}
                />
              }
              text="Git"
            />
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Skills;
