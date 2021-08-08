import Image from "@frontity/components/image";

const Copycon = (props) => {
        const content = props.data;
        const Html2React = props.libraries.html2react.Component;
        return(
                <>
                        {(content.img != '' || content.title != '' || content.text != '' ) &&
                                <div className="copycon">
                                        <div className="wrapper">
                                                <div className="rowflex">
                                                        {content.img != '' && <figure><Image src={content.img} /></figure>}
                                                        <div className="caption">
                                                                {content.title != ''&& <h3>{content.title}:</h3>}
                                                                {content.text != '' && 
                                                                        <div className="txt">
                                                                                <Html2React html={content.text} />
                                                                        </div>
                                                                }
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        }
                </>
        )
}

export default Copycon;