import React from "react";
import "../css/Project.css";
import Card from "../components/Card";

import projectOne from "../assets/video/1 P.mp4";
import projectTwo from "../assets/video/2 P.mp4";
import projectThree from "../assets/video/3 P.mp4";
import projectFour from "../assets/video/4 P.mp4";
import projectFive from "../assets/video/5 P.mp4";
const Project = () => {
	return (
		<div id="project" className="project-container">
			<div className="show-cards">
			<Card
				name="Digital Clock & Stopwatch"
				image={projectOne}
				description="A digital clock (24-hour & 12-hour) and stopwatch built with HTML, CSS, and JavaScript, featuring real-time updates and a user-friendly interface."
				highlight="HTML | CSS | JS"
			/>
			<Card
				name="Counter App"
				image={projectTwo}
				description="A simple counter application built with HTML, CSS, and JavaScript, allowing users to increment, decrement, and reset values with ease."
				highlight="HTML | CSS | JS"
			/>
			<Card
				name="To-Do List App"
				image={projectThree}
				description="A simple to-do list app using HTML, CSS, and JavaScript for easy task management with a clean, responsive design."
				highlight="HTML | CSS | JS"
			/>
			<Card
				name="Quote Generator"
				image={projectFour}
				description="A simple quote generator using HTML, CSS, JavaScript, and Fetch API to display random quotes with a clean, responsive design."
				highlight="HTML | CSS | JS"
			/>
			<Card
				name="Weather Checker"
				image={projectFive}
				description="A weather-checking app built with HTML, CSS, JavaScript, and Fetch API. It provides real-time weather updates for any location with a clean, responsive interface."
				highlight="HTML | CSS | JS"
			/>

			</div>
		</div>

	);
};

export default Project;
