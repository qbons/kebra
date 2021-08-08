import { connect } from 'frontity';
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import SolutionItem from './solution-item';

import ContactForm, {ContactFormHeader} from '../../partial/contact-form';

const Service = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const content = req.data.content;
        const Html2React = libraries.html2react.Component;
        return (
                <>
                        <div className="inner-service">
                                {(content.img1 != '' || content.title1 != '' || content.txt1 != '') && 
                                        <div className="copy">
                                                <div className="wrapper rowflex">
                                                        {content.img1 != '' && <figure><Image src={content.img1} width="420" /></figure>}
                                                        {(content.title1 != '' || content.txt1 != '') && 
                                                                <div className="caption">
                                                                        {content.title1 != '' && <h2><Html2React html={content.title1} /></h2>}
                                                                        {content.txt1 != '' &&
                                                                                <div className="txt">
                                                                                        <Html2React html={content.txt1} />
                                                                                </div>
                                                                        }
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                }
                                <div className="client">
                                        <div className="wrapper">
                                                {content.title2 != '' &&
                                                        <div className="hentry">
                                                                <h2><Html2React html={content.title2} /></h2>
                                                        </div>
                                                }
                                                {(content.img2 != ''  || content.txt2 != '') && 
                                                        <div className="copytxt rowflex">
                                                                {content.img2 != '' && <figure><Image src={content.img2} width="272" /></figure>}
                                                                {content.txt2 != '' && 
                                                                        <div className="caption">
                                                                                <div className="txt">
                                                                                        <Html2React html={content.txt2} />
                                                                                </div>
                                                                        </div>
                                                                }
                                                        </div>
                                                }
                                                {content.client.length > 0 &&
                                                        <div className="list rowflex">
                                                                {content.client.map((item, index) => {
                                                                        return(
                                                                                <figure key={index}><Image src={item.img} /></figure>
                                                                        )        
                                                                })}
                                                        </div>
                                                }
                                        </div>
                                </div>
                                <div className="solution">
                                        <div className="wrapper">
                                                {(content.ssubtitle != '' || content.stitle != '') && 
                                                        <div className="hentry">
                                                                {content.ssubtitle!= '' && <span>{content.ssubtitle}</span>}
                                                                {content.sstitle != '' && <h2>{content.stitle}</h2>}
                                                        </div>
                                                }
                                                {content.service.length > 0 &&
                                                        <div className="list">
                                                                {content.service.map((item, index) => {
                                                                        return(
                                                                                <SolutionItem key={index} title={item.title}>
                                                                                        {item.icon != '' && <figure><Image src={item.icon} width="170"/></figure>}
                                                                                        <div className="caption">
                                                                                                {item.text != '' && 
                                                                                                        <div className="txt">
                                                                                                                <Html2React html={item.text} />
                                                                                                        </div>
                                                                                                }
                                                                                                <Link link={item.url} className="more">Learn More</Link>
                                                                                        </div>
                                                                                </SolutionItem>
                                                                        )
                                                                })}
                                                        </div>
                                                }
                                        </div>
                                </div>
                                <div className="section-contact greyed">
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

export default connect(Service);
