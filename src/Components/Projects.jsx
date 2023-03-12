import '../index.css'
import Project from './ProjectCode'

const Projects = () => {
  return (
    <>
    <section className="projects-section" id="portfolio">
      <div className="projects-container">
        <div className="col-lg-12 text-center">
          <h1> Projects I've worked on:</h1>
        </div>
        <div>
          <Project photo={<img src="https://i.gyazo.com/c4a1067650459568eb1a88484be6a4bc.png" width={500} alt="car" />} text="Gamerconnect is a  social media for gamers to connect, post, and interact with other gamers"/>
          <Project photo={<img src="https://i.gyazo.com/9e297ef8fc89ab59f6d66f6764b7782c.png" width={500} alt="car" />} text="Dealership Application to track everyday car operations"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects