import React from "react";
import "../css/Project.css";
import Card from "../components/Card";
import projectOne from "../assets/video/4 D.mp4";
import projectTwo from "../assets/video/5 D.mp4";
const Project = () => {
	return (
		<div id="project" className="project-container">
			<Card
				name="Quote Generator"
				image={projectOne}
				description="A simple quote generator using HTML, CSS, JavaScript, and Fetch API to display random quotes with a clean, responsive design."
				highlight="HTML | CSS | JS"
			/>
			<Card
				name="Weather Checker"
				image={projectTwo}
				description="A weather-checking app built with HTML, CSS, JavaScript, and Fetch API. It provides real-time weather updates for any location with a clean, responsive interface."
				highlight="HTML | CSS | JS"
			/>
		</div>
	);
};

export default Project;
