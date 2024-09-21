export const Text = ({ subHeadline, headline, refer }) => {
	return (
		<div className="description padding-right animate-left">
			<div className="global-headline">
				<h2 className="sub-headline">{subHeadline}</h2>
				<h3 className="headline headline-dark">{headline}</h3>
				<div className="asterisk">
					<i className="fas fa-asterisk"></i>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor
				earum accusamus suscipit. Officia atque vitae excepturi deserunt nihil?
			</p>
			<a href="index.html" className="btn btn-secondary">
				{refer}
			</a>
		</div>
	);
};
