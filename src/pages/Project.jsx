import React, { useState } from 'react'
import '../css/Project.css'
import Card from '../components/Card'

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
const Project = () => {
  const [width, setWidth] = useState(window.innerWidth)
  return (
    <div id="project" className="project-container">
      <div className="show-cards">
        <Card
          name="Digital Clock & Stopwatch"
          image={width < 640 ? p1Phone : p1Desktop}
          description="A digital clock (24-hour & 12-hour) and stopwatch built with HTML, CSS, and JavaScript, featuring real-time updates and a user-friendly interface."
          highlight="HTML | CSS | JS"
          projectLink="https://mkarthees.github.io/DigitalClock/"
          projectCode="https://github.com/MKarthees/DigitalClock"
        />
        <Card
          name="Counter App"
          image={width < 640 ? p2Phone : p2Desktop}
          description="A simple counter application built with HTML, CSS, and JavaScript, allowing users to increment, decrement, and reset values with ease."
          highlight="HTML | CSS | JS"
          projectLink="https://mkarthees.github.io/Counter/"
          projectCode="https://github.com/MKarthees/Counter"
        />
        <Card
          name="To-Do List App"
          image={width < 640 ? p3Phone : p3Desktop}
          description="A simple to-do list app using HTML, CSS, and JavaScript for easy task management with a clean, responsive design."
          highlight="HTML | CSS | JS"
          projectLink="https://mkarthees.github.io/Todo-List/"
          projectCode="https://github.com/MKarthees/Todo-List"
        />
        <Card
          name="Quote Generator"
          image={width < 640 ? p4Phone : p4Desktop}
          description="A simple quote generator using HTML, CSS, JavaScript, and Fetch API to display random quotes with a clean, responsive design."
          highlight="HTML | CSS | JS"
          projectLink="https://mkarthees.github.io/QuoteGenerator/"
          projectCode="https://github.com/MKarthees/QuoteGenerator"
        />
        <Card
          name="Weather Checker"
          image={width < 640 ? p5Phone : p5Desktop}
          description="A weather-checking app built with HTML, CSS, JavaScript, and Fetch API. It provides real-time weather updates for any location with a clean, responsive interface."
          highlight="HTML | CSS | JS"
          projectLink="https://mkarthees.github.io/Weather-App/"
          projectCode="https://github.com/MKarthees/Weather-App"
        />
        <Card
          name="Work Day Training Portal"
          image={width < 640 ? p6Phone : p6Desktop}
          description="The Work Day Training Portal website for Ramaussys Technologies uses HTML, CSS, JavaScript, and React to deliver a responsive, user-friendly website, enhancing usability and boosting the company’s online presence."
          highlight="React"
          projectLink={false}
          projectCode="https://github.com/MKarthees/Work-Day"
        />
        <Card
          name="Interactive Image Slider"
          image={width < 640 ? p7Desktop : p7Desktop}
          description="A dynamic React-based image slider that combines automatic image transitions and manual navigation controls. Users can enjoy seamless image swapping with an auto-swap feature while also having the option to click through images manually."
          highlight="React"
          projectLink={false}
          projectCode={false}
        />
      </div>
    </div>
  )
}

export default Project
