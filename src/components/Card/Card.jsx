import { HiEye, HiEyeOff, HiCode } from 'react-icons/hi';
import { MdFileUploadOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({
	image,
	name,
	description,
	highlight,
	projectLink,
	projectCode,
}) => {
	return (
		<div className='card'>
			{/* <div className="overlay"></div> */}

			<div className='details'>
				<video autoPlay loop muted>
					<source src={image} />
				</video>
				<div className='project-deatil'>
					<h1>{name}</h1>
					<p>{description}</p>
					<div className='highlight'>
						<label>{highlight}</label>
					</div>
					<div className='action'>
						<Link
							to={projectLink === false ? '' : projectLink}
							target={projectLink === false ? '' : '_blank'}
						>
							<button type='button'>
								{projectLink === false ? <HiEyeOff /> : <HiEye />}
							</button>
						</Link>
						<Link
							to={projectCode === false ? '' : projectCode}
							target={projectCode === false ? '' : '_blank'}
						>
							<button type='button'>
								{projectCode === false ? <MdFileUploadOff /> : <HiCode />}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
