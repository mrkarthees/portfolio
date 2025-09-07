import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const sendMail = async ({ name, email, message }) => {
	if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
		console.error('EmailJS env vars missing');
		return { success: false, error: 'Missing EmailJS config' };
	}

	const templateParams = { name, email, message };

	try {
		const result = await emailjs.send(
			SERVICE_ID,
			TEMPLATE_ID,
			templateParams,
			PUBLIC_KEY
		);
		return { success: true, result };
	} catch (error) {
		console.error('EmailJS Error:', error);
		return { success: false, error };
	}
};

export default sendMail;
