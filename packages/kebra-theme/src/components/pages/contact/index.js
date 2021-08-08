import { connect } from 'frontity';

import ContactForm from '../../partial/contact-form';

import HeadMeta from '../../head-meta';

const Contact = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const content = req.data.content;
        const Html2React = libraries.html2react.Component;
        return (
                <>
                        <HeadMeta/>
                        <div className="inner-contact cvr-bg-bf">
                                <div className="pusher">
                                        <div className="hentry">
                                                {content.title != '' && <h2>{<Html2React html={content.title} />}</h2>}
                                                {content.text != '' && 
                                                        <div className="txt">
                                                                <Html2React html={content.text} />
                                                        </div>
                                                }
                                        </div>
                                        
                                        <div className="layer contact-general">
                                                {content.ftitle != '' && <h3><Html2React html={content.ftitle} /></h3>}
                                                <ContactForm />
                                                {content.info != '' &&
                                                        <div className="info">
                                                                <Html2React html={content.info} />
                                                        </div>
                                                }
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default connect(Contact);
