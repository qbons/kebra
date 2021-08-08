import TestimonialCarousel from './testimonial-carousel';

const Testimonial = (props) => {
        return(
                <div className="testi">
                       <TestimonialCarousel data={props.data} libraries={props.libraries} />
                </div>
        )
}

export default Testimonial;