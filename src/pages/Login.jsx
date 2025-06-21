import LoginAndRegister from "../component/LoginAndRegister.jsx";


function Login(){
    return(
        <div className="login">
            <LoginAndRegister
                title="LOGIN"
                quote="Logging in is the first step — the next step is greatness"
                buttonText="LOGIN"
                linkText="Don't have an account? Register here"
                linkTo="/register"
            />
        </div>
    );
}

export default Login;