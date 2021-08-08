import Link from '@frontity/components/link';

const CTA = (props) => {
        const content = props.data.cta;
        return(
                <div className="cta">
                        <div className="wrapper">
                                <div className="layer cvr-bg">
                                        {content.title != '' && <h2>{content.title}</h2>}
                                        {content.subtitle != '' && <p>{content.subtitle}</p>}
                                        {(content.btn != '' && content.url != '') && <Link link={content.url} className="button btn-blue">{content.btn}</Link> }
                                </div>
                        </div>
                </div>
        )
}

export default CTA;