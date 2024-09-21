import { Text } from './Text';
import square1 from '../assets/square-1.jpg';
import square2 from '../assets/square-2.jpg';
import square3 from '../assets/square-3.jpg';
import square4 from '../assets/square-4.jpg';

export const Menu = () => {
	return (
		<section className="menu">
			<div className="container">
				<div className="row">
					<div className="image-group padding-right animate-left">
						<img src={square1} alt="image" />
						<img src={square2} alt="image" />
						<img src={square3} alt="image" />
						<img src={square4} alt="image" />
					</div>
					<Text subHeadline={'Explore'} headline={'Menu'} refer={'See Full Menu'} />
				</div>
			</div>
		</section>
	);
};
