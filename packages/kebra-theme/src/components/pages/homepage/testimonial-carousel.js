import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from "../../../assets/css/slick.css" ;
import { styled } from "frontity";

export default class TestimonialCarousel extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next(e) {
                e.preventDefault();
		this.slider.slickNext();
	}
	previous(e) {
                e.preventDefault();
		this.slider.slickPrev();
	}
	render() {
                const content = this.props.data.testimonial;
                const Html2React = this.props.libraries.html2react.Component;
                
		const settings = {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: false,
                        speed: 500,
                        autoplaySpeed: 5000,
                        variableWidth: false,
                        responsive: [
                                {
                                        breakpoint: 1400,
                                        settings: {
                                                arrows: false,
                                                slidesToShow: 1,
                                                variableWidth: true
                                        }
                                }
                        ],
		};
		return (
                        <div className="wrapper rowflex">
                                <div className="info">
                                        {content.title != '' && <h2>{content.title}</h2>}
                                        {content.text != '' && 
                                                <div className="txt">
                                                        <Html2React html={content.text} />
                                                </div>
                                        }
                                        {content.item.length > 2 && <div className="slidenav"><a href="#" className="prev" onClick={this.previous}></a><a href="#" className="next" onClick={this.next}></a></div>}
                                </div>
                                {content.item.length > 0 && 
                                        <div className="holder">
                                                <SliderElem className="slider">
                                                        <Slider ref={(c) => (this.slider = c)} {...settings} >
                                                                {content.item.map((item, index) => {
                                                                        return(
                                                                                <div key={index} className="item">
                                                                                        {item.text != '' &&
                                                                                                <div className="txt">
                                                                                                        <Html2React html={item.text} />
                                                                                                </div>
                                                                                        }
                                                                                        <div className="author">
                                                                                                {item.author != '' && <h3>{item.author}</h3>}
                                                                                                {item.occ != '' && <span><Html2React html={item.occ} /></span>}
                                                                                        </div>
                                                                                </div>                
                                                                        )
                                                                })}
                                                        </Slider>
                                                </SliderElem>
                                        </div>
                                }
                        </div>
		);
	}
}

const SliderElem = styled.div `${SlickCSS}`