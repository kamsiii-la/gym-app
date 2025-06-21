import ProgramsCard from "../component/Programs-card.jsx";
import "../css/Programs.css"

function Programs(){
    return(
        <div className="programs" id="programs">
            <div className="programs-offered">
                <h1>PROGRAMS</h1>
            </div>

            <ProgramsCard/>

        </div>
    );
}

export default Programs;