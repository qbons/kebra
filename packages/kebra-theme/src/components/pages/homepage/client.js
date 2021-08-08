import Image from "@frontity/components/image";

const Client = (props) => {
        const content = props.data.client;
        const Html2React = props.libraries.html2react.Component;
        return(
                <div className="client">
                        <div className="wrapper rowflex">
                                <div className="info">
                                        {content.title != '' && <h2>{content.title}</h2>}
                                        {content.text != '' &&
                                                <div className="txt">
                                                        <Html2React html={content.text} />
                                                </div>
                                        }
                                </div>
                                {content.item.length > 0 &&
                                        <div className="icons">
                                                {content.item.map((item, index) => {
                                                        return(
                                                                <figure key={index}><Image src={item.img} /></figure>
                                                        )
                                                })}
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Client;