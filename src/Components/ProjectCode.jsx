import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = ({ photo, text, name, link, tech1, tech2, tech3, live,tech4 }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);



  return (
    <>
      <div className="row portfolio-row" data-aos="fade-up">
        <div className="portfolio-item-wrapper wp5 ">
          <div className="portfolio-item">
            <div className="project-div">
              <div className="project-img">{photo}</div>
              <div className="project-info">
                <h2>
                  {name}
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    <img
                      src="https://i.gyazo.com/2db65378e24e4795fa1950b1b25c6dc0.png"
                      width={50}
                      alt="github-icon"
                    />
                  </a>
                </h2>
                <p>{text}</p>
                <div className="tech-used">
                  <p>{tech1}</p>
                  <p className="tech">{tech2}</p>
                  <p className="tech">{tech3}</p>
                  <p className="tech">{tech4}</p>
                </div>
                <a href={live} target="_blank" rel="noreferrer noopener"><button className="live-btn btn btn-primary">Live</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
