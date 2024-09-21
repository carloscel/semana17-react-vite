import { Card } from './Card';

export const Cards = ({ inputData, removeReview }) => {
	return (
		<div className="footer__container-card">
			{inputData.map((data) => (
				<Card key={data.id} data={data} removeReview={removeReview} />
			))}
		</div>
	);
};
