import { connect, styled } from 'frontity';
import Image from "@frontity/components/image";

import Team from './team';

import ContactForm, {ContactFormHeader} from '../../partial/contact-form';
import HeadMeta from '../../head-meta';


const AboutUs = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const content = req.data.content;
        const Html2React = libraries.html2react.Component;

        let team1 = [];
        let team2 = [];
        if(content.team.length > 0){
                content.team.map((item, index) => {
                        index < 2 ? team1.push(item) : team2.push(item);
                });
        }
        return (
                <>
                        <HeadMeta/>
                        <div className="inner-about">
                                <div className="copy">
                                        <div className="wrapper rowflex">
                                                {content.iimg != '' && <figure><Image src={content.iimg} width="392" /></figure> }
                                                <div className="caption">
                                                        {content.ititle != '' && <h2>{content.ititle}</h2>}
                                                        {content.itxt != '' &&
                                                                <div className="txt">
                                                                        <Html2React html={content.itxt} />
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                </div>
                                {(content.htitle != '' || content.htxt != '') &&
                                        <div className="heading">
                                                <div className="wrapper rowflex">
                                                        {content.htitle != '' && <span>{content.htitle}</span>}
                                                        {content.htxt != '' && <h2><Html2React html={content.htxt} /></h2>}
                                                </div>
                                        </div>
                                }
                                {(content.cimg1 != '' || content.ctxt1 != '') &&
                                        <div className="pair img-right">
                                                <div className="wrapper rowflex">
                                                        {content.cimg1 != '' && <figure><Image src={content.cimg1} /></figure>}
                                                        {content.ctxt1 != '' &&
                                                                <div className="caption">
                                                                        <div className="txt">
                                                                                <Html2React html={content.ctxt1}  />
                                                                        </div>
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                }
                                {(content.cimg2 != '' || content.ctxt2 != '') &&
                                        <div className="pair img-left">
                                                <div className="wrapper rowflex">
                                                        {content.cimg2 != '' && <figure><Image src={content.cimg2} /></figure>}
                                                        {content.ctxt2 != '' &&
                                                                <div className="caption">
                                                                        <div className="txt">
                                                                                <Html2React html={content.ctxt2} />
                                                                        </div>
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                }
                                {(team1.length > 0 || team2.length > 0) &&
                                        <div className="person">
                                                <div className="wrapper">
                                                        {team1.length > 0 && <Team team={team1} libraries={libraries} />}
                                                        {team2.length > 0 && <Team team={team2} libraries={libraries} />}
                                                </div>
                                        </div>
                                }
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

export default connect(AboutUs);
