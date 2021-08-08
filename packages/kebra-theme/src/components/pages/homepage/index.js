import { connect } from 'frontity';

import Intro from './intro';
import Branding from './branding';
import Solution from './solution';
import Strategy from './strategy';
import Case from './case';
import Testimonial from './testimonial';
import Client from './client';
import CTA from './cta';

import SectionBlog from '../../partial/section-blog';
import ContactForm, {ContactFormHeader} from '../../partial/contact-form';

const Wrap = (props) => {
        return <>{props.children}</>
}

const Homepage = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const content = req.data.content;

        return (
                <>
                        {content.visibility.length > 0 &&
                                <div className="inner-home">
                                        {content.visibility.map((item, index) =>{
                                                return(
                                                        <Wrap key={index}>
                                                                {(item.section === 'intro' && item.visible) && <Intro data={content} libraries={libraries} /> }
                                                                {(item.section === 'branding' && item.visible) && <Branding  data={content} libraries={libraries} /> }
                                                                {(item.section === 'solution' && item.visible) && <Solution data={content} libraries={libraries} /> }
                                                                {(item.section === 'strategy' && item.visible) && <Strategy data={content} libraries={libraries} /> }
                                                                {(item.section === 'case' && item.visible) && <Case data={content} libraries={libraries} /> }
                                                                {(item.section === 'testi' && item.visible) && <Testimonial data={content} libraries={libraries}  /> }
                                                                {(item.section === 'client' && item.visible) && <Client data={content} libraries={libraries} /> }
                                                                {(item.section === 'cta' && item.visible) && <CTA data={content}/> }
                                                                {(item.section === 'blog' && item.visible) && <SectionBlog /> }
                                                                {(item.section === 'contact' && item.visible) && 
                                                                        <div className="section-contact ">
                                                                                <div className="wrapper">
                                                                                        <div className="contact-general narrow">
                                                                                                <ContactFormHeader data={ state.theme.options.data} />
                                                                                                <ContactForm/>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                }
                                                        </Wrap>
                                                )
                                        })}
                                </div>
                        }       
                </>
        )
}

export default connect(Homepage);
