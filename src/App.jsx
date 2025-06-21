import "./css/App.css"
import Home from "./pages/Home.jsx"
import Navbar from "./component/Navbar.jsx";
import Programs from "./pages/Programs.jsx"
import Plans from "./pages/Plans.jsx"
import About from "./pages/Contact.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function MainPage(){
    return(
        <>
            <Navbar/>
            <Home/>
            <Programs/>
            <Plans/>
            <About/>
            <Testimonial/>
        </>
    );
}

function App() {

  return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>

  );
}

export default App
