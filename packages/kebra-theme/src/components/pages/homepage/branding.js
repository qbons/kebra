import Image from "@frontity/components/image";

import BrandingCarousel from './branding-carousel';

const Branding = (props) => {
        const content = props.data.branding;
        const Html2React = props.libraries.html2react.Component;
        return(
                <div className="branding">
                        <div className="wrapper">
                                {content.title != '' && <h2>{content.title}</h2>}
                                
                                {content.item.length > 0 &&
                                        <BrandingCarousel>
                                                {content.item.map((item, index) => {
                                                        return(
                                                                <div key={index} className={"item "+ item.color+"-color"}>
                                                                        {item.heading != '' && <h2>{item.heading}</h2>}
                                                                        <div className="rowflex">
                                                                                {(item.img1 != '' || item.text1 != '' || item.title1 != '') &&
                                                                                        <div className="col">
                                                                                                {item.img1 != '' && <figure><Image src={item.img1} width="142" /></figure>}
                                                                                                <div className="caption">
                                                                                                        {item.title1 != '' && <h3><Html2React html={item.title1} /></h3>}
                                                                                                        {item.text1 != '' && 
                                                                                                                <div className="txt">
                                                                                                                        <Html2React html={item.text1} />
                                                                                                                </div>
                                                                                                        }
                                                                                                </div>
                                                                                        </div>
                                                                                }
                                                                                {(item.img2 != '' || item.text2 != '' || item.title3 != '') &&
                                                                                        <div className="col">
                                                                                                {item.img2 != '' && <figure><Image src={item.img2} width="142" /></figure>}
                                                                                                <div className="caption">
                                                                                                        {item.title2 != '' && <h3><Html2React html={item.title2} /></h3>}
                                                                                                        {item.text2 != '' && 
                                                                                                                <div className="txt">
                                                                                                                        <Html2React html={item.text2} />
                                                                                                                </div>
                                                                                                        }
                                                                                                </div>
                                                                                        </div>
                                                                                }
                                                                                {(item.img3 != '' || item.text3 != '' || item.title3 != '') &&
                                                                                        <div className="col">
                                                                                                {item.img3 != '' && <figure><Image src={item.img3} width="142" /></figure>}
                                                                                                <div className="caption">
                                                                                                        {item.title3 != '' && <h3><Html2React html={item.title3} /></h3>}
                                                                                                        {item.text3 != '' && 
                                                                                                                <div className="txt">
                                                                                                                        <Html2React html={item.text3} />
                                                                                                                </div>
                                                                                                        }
                                                                                                </div>
                                                                                        </div>
                                                                                }
                                                                        </div>
                                                                </div>
                                                        )
                                                })}
                                        </BrandingCarousel>
                                }
                        </div>
                </div>
        )
}

export default Branding;