import React from 'react'

const Project = ({photo,text}) => {
  return (
    <>
      <div className="row portfolio-row">
        <div className="portfolio-item-wrapper wp5 ">
          <div className="portfolio-item" data-toggle="modal" href="#courseSourceModal">
            <div>
            <a href="https://gitlab.com/gamerconnect/module3-project-gamma" className="image-link">{photo}</a>
            </div>
            <div className="portfolio-info">
              <h3>{text}</h3>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Project