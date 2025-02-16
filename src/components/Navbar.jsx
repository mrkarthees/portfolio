import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			<header>
				<nav>
					<div className="logo">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.35 455">
							<path
								d="M275,275V492.82H485V275Z"
								transform="translate(-280.5 -272.5)"
								fill="#fff"
							/>
							<path
								d="M380,725A105,105,0,1,1,485,620,105.11,105.11,0,0,1,380,725Z"
								transform="translate(-272.5 -272.5)"
								fill="#fff"
							/>
							<path
								d="M601.47,530.72A209.13,209.13,0,0,0,521.56,515H507.17V725H725V711.13C725,630.16,674.1,560.65,601.47,530.72Z"
								transform="translate(-272.5 -272.5)"
								fill="#fff"
							/>
							<path
								d="M507.17,275V485.58c0,6.44,7.43,9.66,11.78,5.11L584,422.57l.91-.95,11.41-11.94,42.5-44.49,25.64-26.84L725,275Z"
								transform="translate(-272.5 -272.5)"
								fill="#fff"
							/>
						</svg>
						<h2>Karthees</h2>
					</div>
					<ul>
						<NavLink to="/">
							<li>Home</li>
						</NavLink>

						<NavLink to="/project">
							<li>Projects</li>
						</NavLink>

						<NavLink to="/about">
							<li>About</li>
						</NavLink>

						<NavLink to="/contact">
							<li>Contact</li>
						</NavLink>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
