import React, { useRef } from 'react';
import './contact.css';
import { LuLinkedin, LuGithub, LuDribbble, LuMail } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Contact = () => {
	const name = useRef(null);
	const gmail = useRef(null);
	const msg = useRef(null);
	const isSubmit = event => {
		event.preventDefault();
		if (
			name.current.value == '' ||
			gmail.current.value == '' ||
			msg.current.value == ''
		) {
			alert('Enter all Field!');
		} else {
			alert('Thank you, I will respond soon.');
			name.current.value = '';
			gmail.current.value = '';
			msg.current.value = '';
		}
	};
	return (
		<div className='contact-container' id='contact'>
			<h1>Contact</h1>
			<p>
				Got a project in mind or just want to say hi? Let's connect! I'm always open
				to new opportunities, collaborations, and creative ideas.
			</p>
			<form>
				<label>Name:</label>
				<input ref={name} type='text' placeholder="U'R Name" required />
				<label>Gmail:</label>
				<input ref={gmail} type='email' placeholder="U'R Gmail" required />
				<label>Message:</label>
				<textarea ref={msg} placeholder='Message' required />

				<button type='submit' onClick={() => isSubmit(event)}>
					Send
				</button>
			</form>
			<h3>Let's Connect</h3>
			<div className='social'>
				<button
					type='button'
					onClick={() => (window.location = 'mailto:karthees.in@gmail.com')}
				>
					<LuMail />
				</button>

				<Link target='_blank' to='https://www.linkedin.com/in/MKarthees'>
					<button type='button'>
						<LuLinkedin />
					</button>
				</Link>
				<Link target='_blank' to='https://github.com/MKarthees'>
					<button type='button'>
						<LuGithub />
					</button>
				</Link>
				<Link target='_blank' to='https://dribbble.com/Karthees'>
					<button type='button'>
						<LuDribbble />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
