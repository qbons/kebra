import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import VideoBanner from './video-banner';
import Gallery from './gallery';
import Heading from './heading';
import Banner from './banner';
import Copycon from '../case-studies/copycon';

import ContactForm, {ContactFormHeader} from '../../partial/contact-form';

import HeadMeta from '../../head-meta';

const ServiceSingle = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const content = req.data;
        const Html2React = libraries.html2react.Component;
        return (
                <>
                        <HeadMeta/>
                        <div className="detail-service">
                                <div className="intro">
                                        <div className="wrapper">
                                                <div className="hentry">
                                                        <span>{content.title}</span>
                                                        {content.ititle != '' && <h2>{content.ititle}</h2>}
                                                </div>
                                                {content.text != '' && 
                                                        <div className="txt">
                                                                <Html2React html={content.text} />
                                                        </div>
                                                }
                                        </div>
                                </div>
                                {content.section.length > 0 &&
                                        <div className="section">
                                                {content.section.map((item, index) => {
                                                        return(
                                                                <Switch key={index}>
                                                                        <Banner when={item.type === 'banner' && item.video === '' && item.title === '' && item.subtitle === '' } data={item} />
                                                                        <VideoBanner when={item.type === 'banner' && item.video !== '' } data={item} />
                                                                        <Heading when={item.type === 'banner' && item.video === '' && item.title != '' && item.subtitle != '' } data={item} libraries={libraries} />
                                                                        <Copycon when={item.type === 'text'} data={item} libraries={libraries} />
                                                                </Switch>
                                                        )
                                                })}
                                                {content.gallery.length > 0 && <Gallery data={content.gallery} />}
                                        </div>
                                }
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
        )
}

export default connect(ServiceSingle);
