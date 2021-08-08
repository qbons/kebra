import { css } from "frontity";

const Heading = (props) => {
        const item = props.data;
        const Html2React = props.libraries.html2react.Component;
        return(
                <div className="heading">
                        <div className="wrapper">
                                <div className="layer" css={css`background-image: url('${item.img}')`}>
                                        {item.subtitle != '' && <span>{item.subtitle}</span>}
                                        {item.title != '' && <h2><Html2React html={item.title} /></h2>}
                                        {item.link != '' && <a href={item.link}>visit website</a>}
                                </div>
                        </div>
                </div>
        )
}

export default Heading;