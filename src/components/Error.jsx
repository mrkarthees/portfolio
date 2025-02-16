import React from "react";
import "../css/Error.css";
import { Link } from "react-router-dom";
const Error = () => {
	return (
		<div className="error-container">
			<h1>404</h1>
			<h2>Page Not Found</h2>
			<Link to="/">
				<button>Back To Home</button>
			</Link>
		</div>
	);
};

export default Error;
