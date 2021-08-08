import { connect } from 'frontity';
import Image from "@frontity/components/image";
import Switch from '@frontity/components/switch';

import VideoBanner from './video-banner';
import Copycon from './copycon';
import Banner from './banner';

import ContactForm, {ContactFormHeader} from '../../partial/contact-form';
import SectionBlog from '../../partial/section-blog';

import HeadMeta from '../../head-meta';

const CaseStudySingle = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const content = req.data;
        const Html2React = libraries.html2react.Component;
        return (
                <>
                        <HeadMeta/>
                        <div className="detail-case">
                                {(content.logo != '' || content.subtitle != '' || content.title != '') && 
                                        <div className="heading">
                                                <div className="wrapper clearfix">
                                                        {content.logo != '' && <figure><Image src={content.logo} /></figure>}
                                                        {(content.title != '' || content.subtitle != '') && 
                                                                <div className="caption">
                                                                        {content.subtitle != '' && <span><Html2React html={content.subtitle} /></span>}
                                                                        {content.title != '' && <h2><Html2React html={content.title} /></h2>}
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                }
                                
                                {content.section.length > 0 && 
                                        <div className="section">
                                                {content.section.map((item, index) => {
                                                        return(
                                                                <Switch key={index}>
                                                                        <Copycon when={item.type === 'text'} data={item} libraries={libraries} />
                                                                        <Banner when={item.type ==='banner' && (item.video === '') } data={item} />
                                                                        <VideoBanner when={item.type === 'banner' && item.video !== ''} data={item} />
                                                                </Switch>
                                                        )
                                                })}
                                        </div> 
                                }
                                <SectionBlog/>
                                <div className="section-contact ">
                                        <div className="wrapper">
                                                <div className="contact-general narrow">
                                                        <ContactFormHeader data={ state.theme.options.data} />
                                                        <ContactForm/>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default connect(CaseStudySingle);