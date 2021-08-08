import { connect } from 'frontity';
import Image from "@frontity/components/image";

import Carousel from './carousel';
import ContactForm, {ContactFormHeader} from '../../partial/contact-form';

const Testimonial = ({state, libraries}) => {        
        const req = state.source.get(state.router.link);
        const content = req.data.content;        
        const Html2React = libraries.html2react.Component;
        return (
                <>
                        <div className="inner-testi">
                                <div className="caro">
                                        <div className="hentry orn1">
                                                <div className="wrapper">
                                                        {content.tsubtitle != '' && <span>{content.tsubtitle}</span>}
                                                        {content.ttitle != '' && <h2><Html2React html={content.ttitle} /></h2>}
                                                </div>
                                        </div>
                                        {content.titem.length > 0 && 
                                                <Carousel>
                                                        {content.titem.map((item, index) => {
                                                                return(
                                                                        <div className="item" key={index}>
                                                                                {item.icon != '' && <figure><Image src={item.icon} /></figure>}
                                                                                <div className="caption">
                                                                                        <div className="txt">
                                                                                                {item.text != '' && <Html2React html={item.text} />}
                                                                                        </div>
                                                                                        <div className="author">
                                                                                                {item.author != '' && <h3>{item.author}</h3>}
                                                                                                {item.occ != '' && <span>{item.occ}</span>}
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </Carousel>
                                        }
                                </div>
                                
                                <div className="caro">
                                        <div className="hentry orn2">
                                                <div className="wrapper">
                                                        {content.ssubtitle != '' && <span>{content.ssubtitle}</span>}
                                                        {content.stitle != '' && <h2><Html2React html={content.stitle} /></h2>}
                                                </div>
                                        </div>
                                        {content.sitem.length > 0 && 
                                                <Carousel>
                                                        {content.sitem.map((item, index) => {
                                                                return(
                                                                        <div className="item" key={index}>
                                                                                {item.icon != '' && <figure><Image src={item.icon} /></figure>}
                                                                                <div className="caption">
                                                                                        <div className="txt">
                                                                                                {item.text != '' && <Html2React html={item.text} />}
                                                                                        </div>
                                                                                        <div className="author">
                                                                                                {item.author != '' && <h3>{item.author}</h3>}
                                                                                                {item.occ != '' && <span>{item.occ}</span>}
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </Carousel>
                                        }
                                </div>
                                
                                <div className="section-contact">
                                        <div className="wrapper">
                                                <div className="heading">
                                                        {content.ctitle != '' && <h2>{content.ctitle}</h2>}
                                                        <div className="txt">
                                                                {content.ctext != '' && <Html2React html={content.ctext} />}
                                                        </div>
                                                </div>
                                                <div className="contact-general">
                                                        <ContactFormHeader data={ state.theme.options.data} />
                                                        <ContactForm />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default connect(Testimonial);