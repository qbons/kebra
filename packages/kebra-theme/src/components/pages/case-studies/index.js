import { connect } from 'frontity';
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import ContactForm, {ContactFormHeader} from '../../partial/contact-form';
import SectionBlog from '../../partial/section-blog';

import HeadMeta from '../../head-meta';

const CaseStudies = ({ state, libraries }) => {
	const req = state.source.get(state.router.link);
        const content = req.data.content;
        const Html2React = libraries.html2react.Component;
	
	return (
		<>
			<HeadMeta/>
			<div className="inner-case">
				{(content.ctitle != '' || content.csubtitle != '') && 
					<div className="intro cvr-bg-bf">
						<div className="wrapper">
							<div className="holder">
								{content.csubtitle != '' && <span>{content.csubtitle}</span>} 
								{content.ctitle != '' && <h2><Html2React html={content.ctitle} /></h2>}
							</div>
						</div>
					</div>
				}
				{content.citem.length > 0 &&
					<div className="story">
						<div className="wrapper">
							<div className="rowflex">
								{content.citem.map((item, index) => {
									return(
										<div key={index} className="item">
											{item.img != '' && 
												<figure>
													<Link link={item.url}><Image src={item.img} /></Link>
												</figure>
											}
											<div className="caption">
												{item.title != '' && <h3><Link link={item.url}>{item.title}</Link></h3>}
												{item.text != '' && 
													<div className="txt">
														<Html2React html={item.text} />
													</div>
												}
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				}
				
				<SectionBlog/>
				<div className="section-contact ">
					<div className="wrapper">
						<div className="contact-general narrow">
							<ContactFormHeader data={ state.theme.options.data} />
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default connect(CaseStudies);
