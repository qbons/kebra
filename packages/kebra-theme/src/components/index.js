import {connect} from "frontity";

import Styling from "./styling";
import HeadMeta from './head-meta';
import Header from './header';
import Body from "./body";
import Footer from "./footer";

const Root = ({state, actions}) => {
	const req = state.source.get(state.router.link);
	let classes = (req.isBlogPage || req.isCaseStudiesPage || req.isAboutPage || req.isServicePage || req.isHomepage ) ? 'violet-bg' : '';
	classes = (req.isServicePage) ? classes + ' grey-foot' : classes;
	return(
		<>
                        <Styling/>
			<HeadMeta/>
			<div id="shell" className={classes}>
				<Header/>
				<Body/>
				<Footer/>
			</div>
		</>
	)
}

export default connect(Root);