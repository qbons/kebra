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
		const settings = {
                        dots: false,
                        infinite: true,
                        arrows:false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
                        ]
		};
		return (
                        <SliderElem className="slider">
                                <div className="wrapper">
                                        <Slider ref={(c) => (this.slider = c)} {...settings} >
                                                {this.props.children}
                                        </Slider>
                                        <div className="slidenav"><a href="#" className="prev" onClick={this.previous}></a><a href="#" className="next" onClick={this.next}></a></div>
                                </div>
                        </SliderElem>
		);
	}
}

const SliderElem = styled.div `${SlickCSS}`