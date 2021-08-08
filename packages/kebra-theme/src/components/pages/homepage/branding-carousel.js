import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from "../../../assets/css/slick.css" ;
import { styled } from "frontity";

export default class BrandingCarousel extends Component {
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
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows:false,
                        dots: true,
                        autoplay: false,
                        speed: 800,
                        fade: true,
                        autoplaySpeed: 5000,
                        variableWidth: false,
                        responsive: [
                                {
                                        breakpoint: 991,
                                        settings: {
                                                arrows: false,
                                                slidesToShow: 1,
                                        }
                                }
                        ]
		};
		return (
                        <SliderElem className="slider">
                                <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.props.children}
                                </Slider>
                                <div className="slidenav"><a href="#" className="prev" onClick={this.previous}></a><a href="#" className="next" onClick={this.next}></a></div>
                        </SliderElem>
		);
	}
}

const SliderElem = styled.div `${SlickCSS}`