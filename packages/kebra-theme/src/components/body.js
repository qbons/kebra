import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Loading from './loading';
import Homepage from './pages/homepage/';
import AboutUs from './pages/about-us/';
import Service from './pages/service/';
import ServiceSingle from './pages/service/single';
import CaseStudies from './pages/case-studies/';
import CaseStudySingle from './pages/case-studies/single';
import Testimonial from './pages/testimonial/';
import Blog from './pages/blog/';
import Contact from './pages/contact/';
import Regular from './pages/regular/';

const Body = ({ state }) => {
	const req = state.source.get(state.router.link);
	return (
		<>
			<div id="body">
                                <Switch>
                                        <Loading when={req.isFetching} />
					<Homepage when={req.isHomepage} />
                                        <AboutUs when={req.isAboutPage} />
					<Service when={req.isServicePage} />
					<ServiceSingle when={req.isServiceSingle} />
					<CaseStudies when={req.isCaseStudiesPage} />
					<CaseStudySingle when={req.isCaseStudySingle} />
					<Testimonial when={req.isTestimonialPage} />
                                        <Blog when={req.isBlogPage} />
					<Contact when={req.isContactPage} />
					<Regular when={req.isRegularPage} />
                                </Switch>
			</div>
		</>
	);
};

export default connect(Body);
