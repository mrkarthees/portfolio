import React from "react";
import "../css/Error.css";
import { NavLink, useNavigate } from "react-router-dom";
const Error = () => {
	const navigateBtn = useNavigate();
	return (
		<div className="error-container">
			<h1>404</h1>
			<h2>Page Not Found</h2>
			<button onClick={() => navigateBtn("/")}>Back To Home</button>
		</div>
	);
};

export default Error;
