import { useState } from 'react';
import { Cards } from './Cards';
import { Form } from './Form';

export const Footer = () => {
	/*
	const [dataForm, setDataForm] = useState({
		name: '',
		description: '',
	});

	const onInputChange = (e) => {
		setDataForm({
			...dataForm,
			[e.target.name]: e.target.value,
			name o description : lo que el usuario escriba
		});
	};
	*/

	const [inputData, setInputData] = useState([]);

	const addReview = (review) => {
		setInputData([...inputData, review]);
	};

	const removeReview = (id) => {
		const reviewUpdate = inputData.filter((data) => data.id !== id);
		setInputData(reviewUpdate);
	};

	return (
		<footer>
			<div className="container">
				<h4>Custommer Reviews</h4>
				<div className="footer__content">
					<Form addReview={addReview} />
					<Cards inputData={inputData} removeReview={removeReview} />
				</div>
			</div>
		</footer>
	);
};
//Para que el valor del inputName sea el mismo que el input, al value={inputName || ''}

//Cuando renderiza su componente por primera vez, this.state.name no está establecido, por lo que se evalúa a undefined o null, y terminas pasando value={undefined} o value={null}a tu input.
//Cuando ReactDOM comprueba si se controla un campo, comprueba si value != null (tenga en cuenta que es !=, no !==), y desde entonces undefined == null en JavaScript, decide que no está controlado.
//Entonces, cuando onChange() se llama, inputName se establece en un valor de cadena, su entrada pasa de ser incontrolado a ser controlado.
//Si lo haces inputName = {name: ''} en tu constructor, porque '' != null, su entrada tendrá un valor todo el tiempo, y ese mensaje desaparecerá.
