import Link from '@frontity/components/link';
import Image from "@frontity/components/image";


const Solution = (props) => {
        const content = props.data.solution;
        const Html2React = props.libraries.html2react.Component;
        return(
                <div id="solution" className="solution cvr-bg-bf">
                        <div className="wrapper">
                                {content.title != '' && <h2>{content.title}</h2>}
                                {content.item.length > 0 &&
                                        <div className="rowflex">
                                                {content.item.map((item, index) => {
                                                        return(
                                                                <div key={index} className="item">
                                                                        {item.img != '' && <figure><Image src={item.img} width="136"/></figure>}
                                                                        <div className="caption">
                                                                                {item.title != '' && <h3>{item.title}</h3>}
                                                                                {item.text != '' && 
                                                                                        <div className="txt">
                                                                                                <Html2React html={item.text} />
                                                                                        </div>
                                                                                }
                                                                                <Link link={item.url} className="more cvr-bg-af">Learn more</Link>
                                                                        </div>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                }
                                {(content.btn != '' && content.url != '') && 
                                        <div className="centered">
                                                <Link link={content.url} className="button">{content.btn}</Link>
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Solution;