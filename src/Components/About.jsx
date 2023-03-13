import { useEffect } from 'react'
import '../AT.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import pdf from '../Assests/ChristianResume.pdf'

const About = () => {

  useEffect(() => {
    Aos.init({duration: 1100})
  },[])

  return (
<section className="about">
	<div className="container">
		<div>
			<div>
				<div className="about-content">
					<h1 data-aos="zoom-in-right">Hey I'm Christian!</h1>
				</div>
			</div>
		</div>
	</div>
		<div className="at-at">
      <div className="at-at-content">
        <div className="at-at-body">
          <div className="at-at-head">
            <div className="at-at-neck">
              <div className="neck-ribs">
                <div className="neck-cable-first"></div>
                <div className="neck-cable-second"></div>
                <div className="neck-cable-last"></div>
                <i></i><i></i><i></i><i></i>
              </div>
              <div className="neck-bg"></div>
            </div>
            <div className="head-bg">
              <div className="head-snout">
                <div className="in-head-snout"></div>
                <div className="head-snout-gun"></div>
              </div>
              <i className="head-bg-first"></i>
              <i className="head-bg-second"></i>
            </div>
            <div className="head">
              <div className="head-chin">
                <i className="head-chin-bg-first"></i>
                <i className="head-chin-bg-second"></i>
                <i className="head-gun"></i>
                <i className="fire"><i></i><i></i><i></i></i>
              </div>
            </div>
            <i className="head-left-bg"></i>
            <i className="head-top-bg"></i>
          </div>
          <div className="at-at-body-left">
            <i className="at-at-body-left-bg-1"></i>
            <i className="at-at-body-left-bg-2"></i>
            <i className="at-at-body-left-bg-3"></i>
            <i className="at-at-body-left-bg-4"></i>
            <i className="at-at-body-left-bg-5"></i>
            <div className="at-at-body-left-bg"></div>
          </div>
          <div className="at-at-body-right">
            <i className="at-at-body-right-bg-1"></i>
            <i className="at-at-body-right-bg-2"></i>
            <i className="at-at-body-right-bg-3"></i>
            <i className="at-at-body-right-bg-4"></i>
            <i className="at-at-body-right-bg-5"></i>
            <div className="at-at-body-right-bg"></div>
          </div>
          <div className="at-at-body-bottom">
            <div className="at-at-body-bottom-bg"><i></i><i></i><i></i></div>
            <div className="body-bottom-left"></div>
          </div>
          <div className="at-at-body-bg">
            <i></i><i></i><i></i><i></i>
            <div className="i"></div>
          </div>
          <div className="at-at-body-bg-first-block">
            <i className="at-at-body-bg-first-block-item-1"></i>
            <i className="at-at-body-bg-first-block-item-2"></i>
            <i className="at-at-body-bg-first-block-item-3"></i>
          </div>
          <div className="at-at-body-bg-second-block">
            <i className="at-at-body-bg-second-block-item-1"></i>
            <i className="at-at-body-bg-second-block-item-2"></i>
          </div>
          <div className="at-at-body-bg-third-block">
            <i className="at-at-body-bg-third-block-item-1"></i>
            <i className="at-at-body-bg-third-block-item-2"></i>
            <i className="at-at-body-bg-third-block-item-3"></i>
          </div>
        </div>
        <div className="dark-bg">
          <i className="dark-bg-right"></i>
        </div>
      </div>
      <div className="leg-content leg-front">
        <div className="leg-first-joint"><i></i></div>
        <div className="leg-first">
          <i className="leg-first-hr-a"></i>
          <i className="leg-first-hr-b"></i>
          <div className="in-first-leg">
            <div className="leg-second-joint"><i></i></div>
            <div className="leg-second">
              <i className="leg-second-hr"></i>
              <div className="in-second-leg">
                <div className="foot-joint"><i className="foot-ankle"><i className="foot-ankle-bg"></i></i></div>
                <div className="foot-ankle-bottom"></div>
                <div className="foot-ankle-space"></div>
                <div className="foot">
                  <div className="foot-bottom"></div>
                  <div className="foot-land"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leg-content leg-rear">
        <div className="leg-first-joint"><i></i></div>
        <div className="leg-first">
          <i className="leg-first-hr-a"></i>
          <i className="leg-first-hr-b"></i>
          <div className="in-first-leg">
            <div className="leg-second-joint"><i></i></div>
            <div className="leg-second">
              <i className="leg-second-hr"></i>
              <div className="in-second-leg">
                <div className="foot-joint"><i className="foot-ankle"><i className="foot-ankle-bg"></i></i></div>
                <div className="foot-ankle-bottom"></div>
                <div className="foot-ankle-space"></div>
                <div className="foot">
                  <div className="foot-bottom"></div>
                  <div className="foot-land"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leg-content leg-front-back">
        <div className="leg-first-joint"><i></i></div>
        <div className="leg-first">
          <i className="leg-first-hr-a"></i>
          <i className="leg-first-hr-b"></i>
          <div className="in-first-leg">
            <div className="leg-second-joint"><i></i></div>
            <div className="leg-second">
              <i className="leg-second-hr"></i>
              <div className="in-second-leg">
                <div className="foot-joint"><i className="foot-ankle"><i className="foot-ankle-bg"></i></i></div>
                <div className="foot-ankle-bottom"></div>
                <div className="foot-ankle-space"></div>
                <div className="foot">
                  <div className="foot-bottom"></div>
                  <div className="foot-land"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leg-content leg-rear-back">
        <div className="leg-first-joint"><i></i></div>
        <div className="leg-first">
          <i className="leg-first-hr-a"></i>
          <i className="leg-first-hr-b"></i>
          <div className="in-first-leg">
            <div className="leg-second-joint"><i></i></div>
            <div className="leg-second">
              <i className="leg-second-hr"></i>
              <div className="in-second-leg">
                <div className="foot-joint"><i className="foot-ankle"><i className="foot-ankle-bg"></i></i></div>
                <div className="foot-ankle-bottom"></div>
                <div className="foot-ankle-space"></div>
                <div className="foot">
                  <div className="foot-bottom"></div>
                  <div className="foot-land"></div>
                </div>						
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
		
		<div className="bg">
			<i className="star star-4"></i>
			<i className="star star-5"></i>
			<i className="star star-6"></i>
			<i className="star-small star-small-1"></i>
			<i className="star-small star-small-2"></i>
			<i className="star-small star-small-3"></i>
	
		
		</div>
		<i className="moon"></i>
		<i className="mountain-first">
			<i className="mountain-shadow"></i>
		</i>
		<i className="mountain-second">
			<i className="mountain-shadow"></i>
			<span className="mountain-top"></span>
		</i>
		<div className="first-bg">
			<div className="first-bg-anim">
				<div className='about-content about-me'>
				<p>
					At a young age, I found a passion for creating things in the form of 
					Star Wars Legos and as I grew, that passion grew with me which lead me to 
					become a Software Engineer.
				</p>
				<p>May the force be with you! <i className="fa-solid fa-jedi"></i></p>
				</div>
        <div className='divider'>
          <a href={pdf} rel="noreferrer" target="_blank"> 
          <p>VIEW MY FULL RESUME</p> 
          </a>
        </div>
			</div>
		</div>
		<div className="space-ship space-ship-small">
      <i className="space-ship-wing"></i>
      <i className="space-ship-bg"><i className="space-ship-gun"></i></i>
		</div>
	</section>
  )
}

export default About