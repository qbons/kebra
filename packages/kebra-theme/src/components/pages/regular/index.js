import { connect } from "frontity";

const Regular = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const Html2React = libraries.html2react.Component;
        const data  = req.data;
        return(
                <>
                        <div className="detail-service">
                                <div className="intro">
                                        <div className="wrapper">
                                                <div className="hentry">
                                                        <h2>{data.title}</h2>
                                                </div>
                                                <div className="txt">
                                                        <Html2React html={data.content} />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default connect(Regular);