export const SubBanners = ({ alwaysFresh, subHeadline, headline }) => {
	return (
		<section className={`${alwaysFresh} shared`}>
			<div className="container">
				<div className="global-headline">
					<div className="animate-top">
						<h2 className="sub-headline">{subHeadline}</h2>
					</div>
					<div className="animate-bottom">
						<h3 className="headline headline-dark">{headline}</h3>
					</div>
				</div>
			</div>
		</section>
	);
};
