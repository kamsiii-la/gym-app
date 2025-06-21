import "../css/card css/LoginAndRegister.css"
import {Link, useNavigate} from "react-router-dom";

function LoginAndRegister({title,quote,buttonText,linkText,linkTo}){

    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(linkTo, {replace:true});
    }

    return(
        <div className="log-register">
            <div className="box">
                <div className="option">
                    <h2>{title}</h2>
                    <p>{quote}</p>
                </div>
                <div className="forms-log-reg">
                    <form>
                        <input placeholder="Email Address" type="email" required/>
                        <input placeholder="Password" type="password" required/>
                        <button>{buttonText}</button>
                    </form>
                    <div className="for-reg">
                        <p onClick={handleNavigation}>{linkText}</p>
                    </div>
                    <div className="forgot">
                        <a>Forgot Password?</a>
                    </div>
                    <div className="fb-google">
                        <button className="fa fa-facebook">
                            Continue with Facebook
                        </button>
                        <button className="fa fa-google">
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAndRegister;