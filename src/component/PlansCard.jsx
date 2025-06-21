import "../css/card css/PlansCard.css"

function PlansCard(){

    const Plans = [
        {
            id: 1,
            type: "STANDARD PLAN",
            price: "₱1500",
            offered: [
                "Free consultation to coaches",
                "Free Hot and Cold Shower",
                "Access to Basketball Court"
            ]

        },

        {

            id: 3,
            type: "PRO PLAN",
            price: "₱2500",
            offered: [
                "Free consultation to coaches",
                "Free Hot and Cold Shower",
                "Access to Sauna",
                "Access to Basketball Court",
                "Access to Swimming Pool"
            ]
        },

        {
            id: 2,
            type: "PREMIUM PLAN",
            price: "₱2000",
            offered: [
                "Free consultation to coaches",
                "Free Hot and Cold Shower",
                "Access to Basketball Court",
                "Access to Swimming Pool"
            ]
        }
    ]

    return(
        <div className="plans-card">
            {Plans.map((plan) =>(
                <div className="plan-info">
                    <div className="type">
                        <h2>{plan.type}</h2>
                    </div>
                    <div className="price">
                        <h2>{plan.price}</h2>
                    </div>
                    <div className="offered">
                        <ul>
                            {plan.offered.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="plans-button">
                        <button>Avail Membership</button>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default PlansCard;