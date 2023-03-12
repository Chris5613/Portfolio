import React from 'react'

const Skills = () => {
  return (
	<section className="skills-section">
    <div className="container">
          <div>
            <h1>Tech Stacks</h1>
          </div>
          <div className= "skill-content ">
            <div className='front-end'>
              <h3>Front End</h3>
                <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png" className='skills html-logo' alt='html' width={95}/>
                <img src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png" className='skills' alt='css' width={80}/>  
                <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" className='skills' alt='javascript' width={160}/>
                <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" className='skills' alt='react' width={100}/> 
            </div>
            <div className='back-end'>
              <h3>Back End</h3>
                <img src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" alt='python' className="python-logo" width={100}/> 
                <img src="https://framagit.org/uploads/-/system/project/avatar/28062/django.png" alt='django' width={100}/> 
                <img src="https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg" alt='postgres' width={160}/> 
                <img src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" alt='fastapi' width={100}/>
            </div>
            <div className='other'>
              <h3>Other</h3>
            </div>
          </div>
    </div>
  </section>
  )
}

export default Skills
