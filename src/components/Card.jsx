import star from '../assets/estrellas.png';

export const Card = ({ data, removeReview }) => {
	return (
		<div className="card">
			<div className="container__icon">
				<img className="card__star" src={star} alt="" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="icon-close"
					onClick={() => removeReview(data.id)}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>

			<p className="card__description">{data.description}</p>
			<span className="card__name">{data.name}</span>
		</div>
	);
};
