import TestimonialCard from "../component/TestimonialCard.jsx";
import "../css/Testimonial.css"

function Testimonial(){
    return(
        <div className="testimonial" id="testimonial">
            <div className="testimonial-center">
                <h2>Testimonial</h2>
            </div>
            <TestimonialCard/>
        </div>
    );
}

export default Testimonial;