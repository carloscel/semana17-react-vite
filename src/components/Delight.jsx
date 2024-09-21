import { Text } from './Text';
import delight1 from '../assets/bakers-delight-1.jpg';
import delight2 from '../assets/bakers-delight-2.jpg';

export const Delight = () => {
	return (
		<section className="delight">
			<div className="container">
				<div className="row">
					<Text
						subHeadline={"Baker's"}
						headline={'Delight'}
						refer={'Make A Reservation'}
					/>
					<div className="image-group animate-right">
						<img className="animate-top" src={delight1} alt="bread" />
						<img className="animate-bottom" src={delight2} alt="bread" />
					</div>
				</div>
			</div>
		</section>
	);
};
