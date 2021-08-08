import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Strategy = (props) => {
        const content = props.data.strategy;
        const Html2React = props.libraries.html2react.Component;
        return(
                <div className="strategy">
                        <div className="wrapper rowflex">
                                {content.img != '' && <figure><Image src={content.img}/></figure>}
                                <div className="caption">
                                        {content.title != '' && <h2>{content.title}</h2>}
                                        {content.text != '' &&
                                                <div className="txt">
                                                        <Html2React html={content.text} />
                                                </div>
                                        }
                                        {(content.link != '' && content.url != '') && <Link link={content.url} className="more cvr-bg-af">{content.link}</Link>}
                                </div>
                        </div>
                </div>
        )
}

export default Strategy;