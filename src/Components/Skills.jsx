import React from 'react'
import Icons from './Icons'

const Skills = () => {
  return (
	<section className="skills-section">
    <div className="container">
          <div>
            <h1><u>Tech Stacks</u></h1>
          </div>
          <div className= "skill-content  ">
            <h3>Front End</h3>
            <div className='front-end '>
              <Icons icon={<img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png" alt='html' width={90}/>} text="HTML"/>
              <Icons icon={<img src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"  alt='css' width={90}/> } text="CSS"/>
              <Icons icon={<img src="https://i.gyazo.com/e0f9ab3cdaf18cc5beb1770402ca2e1c.png"  alt='bootstrap' width={110}/> } text="Bootstrap"/>
              <Icons icon={<img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"  alt='javascript' width={160}/>} text="Javascript"/>
              <Icons icon={<img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt='react' width={90}/>} text="React"/>
            </div>
            <h3>Back End</h3>
            <div className='back-end'>
              <Icons icon={<img src="https://framagit.org/uploads/-/system/project/avatar/28062/django.png" alt='django' width={90}/>}  text="Django"/>
              <Icons icon={<img src="https://i.gyazo.com/d55e71ced09bf07c57aa7747f9250c30.png" alt='djangoRF' width={170}/>}  text="Django Rest"/>
              <Icons icon={<img src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" className="fastapi-icon" alt='fastapi' width={80}/>} text="FastAPI"/>
              <Icons icon={<img src="https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg" alt='postgres' width={130}/> } text="Postgres"/>
              <Icons icon={<img src="https://i.gyazo.com/f6ab376de47fb84be8fd030da6ee12ea.png" alt='MongoDB' width={100}/> } text="MongoDB"/>
            </div>
            <h3>Other</h3>
            <div className='other'>
              <Icons icon={<img src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" alt='python' width={100}/> } text="Python"/>
              <Icons icon={<img src="https://i.gyazo.com/d1f5a6ff0643a45ca5b8803acb5ee649.png" alt='Docker' width={100}/> } text="Docker"/>
              <Icons icon={<img src="https://i.gyazo.com/d416d97ea3ba2415880beeb355cb3a55.png" alt='Git' width={100}/> } text="Git"/>
              <Icons icon={<img src="https://i.gyazo.com/fcc68a3f4e10fdce1471ed973c5e7730.png" alt='SQL' width={100}/> }text="SQL"/>
              <Icons icon={<img src="https://i.gyazo.com/97fd7183e78bde46fe770686de0294a6.png" alt='RabbitMQ' width={100}/> }text="RabbitMQ"/>
            </div>
          </div>
    </div>
  </section>
  )
}

export default Skills
