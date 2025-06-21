import "../css/Plans.css"
import PlansCard from "../component/PlansCard.jsx";

function Plans(){
    return(
        <div className="plans" id="plans">
            <div className="plans-offered">
                <h1>Fitness Pricing Plan</h1>
            </div>

            <PlansCard/>

        </div>
    );
}

export default Plans;