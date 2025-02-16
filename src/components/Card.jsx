import React from "react";
import "../css/Card.css";
import { FaShareAlt } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

const Card = ({ image, name, description, highlight }) => {
	return (
		<div className="card">
			<video autoPlay loop muted>
				<source src={image} />
			</video>
			<div className="overlay"></div>
			<div className="details">
				<h1>{name}</h1>
				<p>{description}</p>
				<div className="highlight">
					<label>{highlight}</label>
				</div>
				{/* <div className="action">
					<button type="button">{<HiEye />}</button>
					<button type="button">{<FaShareAlt />}</button>
				</div> */}
			</div>
		</div>
	);
};

export default Card;
