
const Intro = (props) => {
        const content = props.data.intro;
        const Html2React = props.libraries.html2react.Component;
        function smoothScroll(e){
                e.preventDefault();       
                const target = document.querySelector('#solution');
                const elementPosition = target.offsetTop;

                window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth"
                });
        }
        return(
                <div className="intro cvr-bg-af">
                        <div className="wrapper">
                                <div className="hentry">
                                        {content.subtitle != '' && <span>{content.subtitle}</span>}
                                        {content.title.length > 0 &&
                                                content.title.map((item, index) => {
                                                        return <b key={index}>{item}</b>
                                                })
                                        }
                                </div>
                                {content.text != '' &&
                                        <div className="caption">
                                                <div className="txt">
                                                        <Html2React html={content.text} />
                                                </div>
                                                <a href="#solution" onClick={smoothScroll} className="cvr-bg"></a>
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Intro;