import React from 'react';
import './navbar.css';
import Logo from '/Logo.png';
import { Link } from 'react-scroll';
const Navbar = () => {
	return (
		<>
			<nav>
				<div className='logo'>
					<img src={Logo} alt='Logo' />
				</div>
				<ul>
					<Link to='home' smooth spy>
						<li>Home</li>
					</Link>

					<Link to='project' smooth spy>
						<li>Projects</li>
					</Link>

					<Link to='about' smooth spy>
						<li>About</li>
					</Link>

					<Link to='contact' smooth spy>
						<li>Contact</li>
					</Link>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
