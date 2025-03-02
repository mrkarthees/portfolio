import React from 'react'
import '../css/Home.css'
import { FaQuoteLeft } from 'react-icons/fa6'
import { FaCode, FaEdit } from 'react-icons/fa'
import watermarkLogo from '../assets/images/Color Logo.png'
import projectVideo from '../assets/video/Project Show.mp4'
import p1Desktop from '../assets/video/1 D.mp4'
import p1Phone from '../assets/video/1 P.mp4'
import p2Desktop from '../assets/video/2 D.mp4'
import p2Phone from '../assets/video/2 P.mp4'
import p3Desktop from '../assets/video/3 D.mp4'
import p3Phone from '../assets/video/3 P.mp4'
import p4Desktop from '../assets/video/4 D.mp4'
import p4Phone from '../assets/video/4 P.mp4'
import p5Desktop from '../assets/video/5 D.mp4'
import p5Phone from '../assets/video/5 P.mp4'
import p6Desktop from '../assets/video/6 D.mp4'
import p6Phone from '../assets/video/6 P.mp4'
import p7Desktop from '../assets/video/7 D.mp4'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigateBtn = useNavigate()
  return (
    <div id="home" className="home-container">
      <section className="hero">
        <h1>
          Hi, I'm <span>Kartheeswaran</span>
        </h1>
        <h2>Developer & Designer</h2>
        <p>
          I develop and design modern web apps using the <span>MERN </span>
          stack, blending technical skills with a passion for design.
        </p>
        <h3>
          <i>
            <FaQuoteLeft />
          </i>
          <span>Thinking </span>
          only <span> leads </span>to
          <span> creativity</span>
        </h3>
      </section>

      <section className="hero-content">
        <video type="video/mp4" autoPlay loop muted>
          <source src={projectVideo} />
        </video>

        <div className="card-show">
          <div className="home-card">
            <div className="card-title">
              <span>
                <FaCode />
              </span>
              <h4>Developer</h4>
            </div>
            <p>Developing with precision and innovation.</p>
          </div>
          <div className="home-card">
            <div className="card-title">
              <span>
                <FaEdit />
              </span>
              <h4>Designer</h4>
            </div>
            <p>Turning ideas into captivating visuals.</p>
          </div>
        </div>

        <div className="project-cards">
          <h1>Recent Works</h1>
          <div className="project-img">
            <video autoPlay loop muted>
              <source src={p7Desktop} />
            </video>
            <video autoPlay loop muted>
              <source src={p6Phone} />
            </video>
            <video autoPlay loop muted>
              <source src={p2Phone} />
            </video>
          </div>
          <button type="button" onClick={() => navigateBtn('project')}>
            View All Project
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
