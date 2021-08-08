import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Case = (props) => {
        const content = props.data.case;
        const Html2React = props.libraries.html2react.Component;
        return(
                <div className="case">
                        <div className="wrapper">
                                {(content.title != '' || content.link != '' || content.url != '') &&
                                        <div className="hentry clearfix">
                                                <h2>{content.title}</h2>
                                                {(content.link != '' && content.url != '') &&<Link link={content.url}>{content.link}</Link>}
                                        </div>
                                }
                                {content.item.length > 0 &&
                                        <div className="rowflex">
                                                {content.item.map((item, index) => {
                                                        return(
                                                                <div key={index} className="item">
                                                                        {item.img != '' && <figure><Link link={item.url}><Image src={item.img} /></Link></figure>}
                                                                        <div className="caption">
                                                                                {item.title != '' && <h3><Link link={item.url}>{item.title}</Link></h3>}
                                                                                {item.text != '' &&
                                                                                        <div className="txt">
                                                                                                <Html2React html={item.text} />
                                                                                        </div>
                                                                                }
                                                                                {item.logo != '' && <Image src={item.logo} />}
                                                                        </div>
                                                                </div>
                                                        )        
                                                })}
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Case;