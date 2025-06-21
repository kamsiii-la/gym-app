import "../css/Home.css"
import {useNavigate} from "react-router-dom";

function Home (){

    const navigate = useNavigate();



    return(
        <div className="home">
            <div className="home-center">
                <h1>Fitness is not a destination,<br/> <span className="red-home-txt">it's a lifestyle</span> </h1>
                <p>
                    At our gym, we help you build strength,
                   stay motivated, and live healthier every day.
                </p>
                <button onClick={() => navigate("/login")}>Start Your Journey</button>
            </div>
        </div>
    );
}

export default Home;