import React from 'react';
import './about.css';
import { SiAdobeillustrator } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaUserGraduate } from 'react-icons/fa';
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { IoLogoNodejs } from 'react-icons/io5';
import { BiLogoMongodb } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';

const About = () => {
	return (
		<div className='about-container' id='about'>
			<h1>About Me</h1>
			<h2>Education</h2>
			<div className='education-card'>
				<div className='box'>
					<label>Postgraduate</label>
					<span>
						MCA <GrStatusGood />
					</span>

					<h3>Master of Computer Applications</h3>
					<h4>2023 - 2025</h4>
					<div className='icon'>
						<i>
							<FaUserGraduate />
						</i>
					</div>
				</div>
				<div className='box'>
					<label>Undergraduate</label>
					<span>
						BCA
						<GrStatusGood />
					</span>

					<h3>Bachelor of Computer Applications</h3>
					<h4>2020 - 2023</h4>
					<div className='icon'>
						<i>
							<FaUserGraduate />
						</i>
					</div>
				</div>
			</div>
			<h2>Technical Skills</h2>
			<div className='education-card'>
				<div className='box'>
					<label>Frontend Development</label>
					<div className='icon'>
						<i>
							<FaHtml5 />
						</i>
						<i>
							<FaCss3 />
						</i>
						<i>
							<RiJavascriptFill />
						</i>
						<i>
							<FaReact />
						</i>
						<i>
							<RiTailwindCssFill />
						</i>
					</div>
				</div>
				<div className='box'>
					<label>Backend Development</label>
					<div className='icon'>
						<i>
							<IoLogoNodejs />
						</i>
						<i>
							<BiLogoMongodb />
						</i>
					</div>
				</div>
				<div className='box'>
					<label>UI/UX Design</label>
					<div className='icon'>
						<i>
							<SiAdobeillustrator />
						</i>
					</div>
				</div>
			</div>
			<p className='notes'>
				I am always eager to explore new technologies and improve my skills to stay
				ahead in the ever-evolving digital landscape. Let's collaborate and bring
				your ideas to life!
			</p>
		</div>
	);
};

export default About;
