import LoginAndRegister from "../component/LoginAndRegister.jsx";

function Register() {
    return(
        <div className="register">
            <LoginAndRegister
                title="REGISTER"
                quote="You don’t have to be great to start, but you have to start to become great."
                buttonText="REGISTER"
                linkText="Already have an account? Login here"
                linkTo="/login"
            />
        </div>
    );
}
export default Register