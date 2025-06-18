import React from 'react';
import './home.css';
import { FaQuoteLeft } from 'react-icons/fa6';
import { FaCode, FaEdit } from 'react-icons/fa';
import projectVideo from '../../assets/video/Project Show.mp4';
import p6Phone from '../../assets/video/6 P.mp4';
import p7Desktop from '../../assets/video/7 D.mp4';
import p8Phone from '../../assets/video/8 P.mp4';

const Home = () => {
	return (
		<>
			<div className='home-container' id='home'>
				<section className='hero'>
					<div className='title'>
						<h1>
							Hi, I'm <span>Kartheeswaran</span>
						</h1>
						<h2>Developer & Designer</h2>
						<p>
							I develop and design modern web apps using the <span>MERN </span>
							stack, blending technical skills with a passion for design.
						</p>
						<h2>
							<span>Thinking </span>
							only <span> leads </span>to
							<span> creativity</span>
						</h2>
					</div>

					<video type='video/mp4' autoPlay loop muted>
						<source src={projectVideo} />
					</video>
				</section>

				<section className='card-container'>
					<div className='card-show'>
						<div className='home-card'>
							<div className='card-title'>
								<span>
									<FaCode />
								</span>
								<h3>Developer</h3>
							</div>
							<p>Developing with precision and innovation.</p>
						</div>
						<div className='home-card'>
							<div className='card-title'>
								<span>
									<FaEdit />
								</span>
								<h3>Designer</h3>
							</div>
							<p>Turning ideas into captivating visuals.</p>
						</div>
					</div>

					<div className='project-cards'>
						<h1>Recent Works</h1>
						<div className='project-img'>
							<video autoPlay loop muted>
								<source src={p8Phone} />
							</video>
							<video autoPlay loop muted>
								<source src={p7Desktop} />
							</video>
							<video autoPlay loop muted>
								<source src={p6Phone} />
							</video>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
