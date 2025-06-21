import emailjs from 'emailjs-com';
import { useRef } from 'react';
import "../css/Contact.css";

function Contacts (){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4y4143j',
            'template_f7sgwnf',
            form.current,
            'eCO9X3oIkrGm7wbX9'
        ).then(
            (result) => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.log(error);
            }
        );
    };

    return(
        <>
            <div className="center-contact" id="contacts">
                <h2 style={{textAlign:"center"}}>Get in touch</h2>
                <p style={{textAlign:"center"}}>
                    If you have any inquiries get in touch with us.
                    Well be happy to help you
                </p>
            </div>

            <div className="contact">

                <div className="left-side">
                    <h3 style={{textAlign: "center"}}>Social Media</h3>
                    <div className="socmed-link">
                        <div className="socmed-item">
                            <a href="#" className="fa fa-facebook"></a>
                            <p>Stay updated, connect, and engage us on Facebook.</p>
                        </div>

                        <div className="socmed-item">
                            <a href="#" className="fa fa-instagram"></a>
                            <p>Explore our visual world and discover beuty of
                                our brand.
                            </p>
                        </div>

                        <div className="socmed-item">
                            <a href="#" className="fa fa-twitter"></a>
                            <p>Follow us for real-time updates and lively
                                discussions.</p>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <h3 style={{textAlign:"center"}}>Contact Us</h3>

                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter full name..." name="name" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email..." name="email"/>
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Enter message..."
                            name="message"
                            required
                        ></textarea>

                        <div className="send-message-btn">
                            <button className="message-btn"  type="submit">Send Message</button>
                        </div>


                    </form>
                </div>
            </div>
        </>
    );
}

export default Contacts;