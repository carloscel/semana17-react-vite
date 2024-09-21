import { SubBanners } from './components/SubBanners';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { OurStory } from './components/OurStory';
import { Delight } from './components/Delight';
import { Footer } from './components/Footer';

export const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<OurStory />
			<SubBanners
				alwaysFresh={'always-fresh'}
				subHeadline={'Always'}
				headline={'Fresh'}
			/>
			<Menu />
			<SubBanners alwaysFresh={'tasty'} subHeadline={'Everything'} headline={'Tasty'} />
			<Delight />
			<Footer />
		</>
	);
};
