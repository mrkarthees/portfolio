import React from "react";
import "../css/Home.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaCode, FaEdit } from "react-icons/fa";
import watermarkLogo from "../assets/images/Color Logo.png";
import projectVideo from "../assets/video/Project Show.mp4";
import proOne from "../assets/video/1 P.mp4";
import proTwo from "../assets/video/2 P.mp4";
import proThree from "../assets/video/3 P.mp4";

import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigateBtn = useNavigate();
	return (
		<>
			<div id="home" className="home-container">
				<img src={watermarkLogo} alt="Karthees Watermark" />
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
						</i>{" "}
						<span>Thinking </span>
						only <span> leads </span>to
						<span> creativity</span>
					</h3>
				</section>
			</div>
			<section className="hero-content">
				<div className="project-show">
					<video type="video/mp4" autoPlay loop muted>
						<source src={projectVideo} />
					</video>
				</div>

				<div className="card-show">
					<div className="card">
						<div className="card-title">
							<FaCode className="icon" />
							<h4>Developer</h4>
						</div>
						<p className="description">
							Developing with precision and innovation.
						</p>
					</div>
					<div className="card">
						<div className="card-title">
							<FaEdit className="icon" />
							<h4>Designer</h4>
						</div>
						<p className="description">
							Turning ideas into captivating visuals.
						</p>
					</div>
				</div>

				<div className="project-cards">
					<h1>Recent Works</h1>
					<div className="project-img">
						<video autoPlay loop muted>
							<source src={proOne} />
						</video>
						<video autoPlay loop muted>
							<source src={proTwo} />
						</video>
						<video autoPlay loop muted>
							<source src={proThree} />
						</video>
					</div>
					<button
						type="button"
						onClick={() => navigateBtn("/Kartheeswaran/project")}
					>
						View All Project
					</button>
				</div>
			</section>
		</>
	);
};

export default Home;
