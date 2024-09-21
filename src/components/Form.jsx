import { useState } from 'react';

export const Form = ({ addReview }) => {
	const [inputName, setInputName] = useState('');
	const [inputDescription, setInputDescription] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		if (inputName === '' || inputDescription === '') {
			console.log('hay al menos un campo vacío');
			return;
		}

		const dataForm = {
			name: inputName,
			description: inputDescription,
			id: new Date().getMilliseconds(),
		};
		addReview(dataForm);

		//console.log(dataForm);
		//setDataForm('');
		setInputName('');
		setInputDescription('');
	};

	return (
		<form onSubmit={onSubmit} className="newsletter-form">
			<div className="newsletter-form-box">
				<input
					type="text"
					className="newsletter-input"
					placeholder="Your name..."
					//name="name"
					onChange={(e) => setInputName(e.target.value)}
					value={inputName || ''}
				/>
			</div>
			<div className="newsletter-form-box">
				<input
					type="text"
					className="newsletter-input"
					placeholder="Reviews..."
					//name="description"
					onChange={(e) => setInputDescription(e.target.value)}
					value={inputDescription || ''}
				/>
			</div>
			<button className="newsletter-btn" type="submit">
				SEND
			</button>
		</form>
	);
};
