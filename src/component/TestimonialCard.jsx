import "../css/card css/TestimonialCard.css"
import Lance from "../assets/profile/lance.png"
import Jasper from "../assets/profile/jasper.jpg"
import Jeff from "../assets/profile/jeff.png"
import Raven from "../assets/profile/raven.jpg"


function TestimonialCard(){

    const information = [
        {
            id: 1,
            image: Jasper,
            name: "Jasper Neal Bahan",
            title: "BSREM",
            message: "This gym helped me build my confidence and improve my strength." +
                " The environment is friendly and welcoming for beginners." +
                " I really enjoy the group classes and personal training sessions. " +
                "Every workout feels worth it!"
        },
        {
            id: 2,
            image: Jeff,
            name: "Jefferson Bacuyag",
            title: "BSIT",
            message: "I've been training at this gym for three months and the results are amazing. " +
                "The coaches are super supportive and knowledgeable." +
                " The equipment is always clean and well-maintained." +
                " It feels like my second home now."
        },
        {
            id: 3,
            image: Lance,
            name: "Lance Mendoza",
            title: "BSHM",
            message: "I used to feel lazy and unmotivated, but this gym changed everything." +
                " The energy and vibe here are so uplifting. " +
                "Staff and members always push each other in a good way." +
                " I actually look forward to going every day."
        },
        {
            id: 4,
            image: Raven,
            name: "Raven Gervacio",
            title: "BSIT",
            message: "I love how organized and clean the facility is." +
                " The trainers listen to your goals and help you every step of the way. " +
                "They made fitness fun for me, even on tough days. " +
                "Joining this gym is one of the best decisions I’ve made."
        }
    ]

    return(

        <div className="testimonialCard">
            {information.map((info) =>(
                <div key={info.id} className="testimonial-card">
                    <div className="testimonial-img-name-title">
                        <div  className="testimonial-pic">
                            <img
                                src={info.image || "https://via.placeholder.com/150"}
                            />
                        </div>
                        <div className="testimonial-name-title">
                            <h3>{info.name}</h3>
                            <p>{info.title}</p>
                        </div>
                    </div>

                    <div className="testimonial-message">
                        <p>{info.message}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default TestimonialCard;