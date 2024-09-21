import story from '../assets/story-img.jpg';
import { Text } from './Text';

export const OurStory = () => {
	return (
		<section className="our-story">
			<div className="container">
				<div className="row">
					<Text subHeadline={'Discover'} headline={'Our Story'} refer={'Learn More'} />
					<div className="image animate-right">
						<img src={story} className="story-img" alt="bread" />
					</div>
				</div>
			</div>
		</section>
	);
};
