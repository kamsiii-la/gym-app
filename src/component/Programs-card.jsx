import "../css/card css/ProgramsCard.css"


function ProgramsCard(){

    const Program = [
        {
            id: 1,
            exercise: 'Strength Training',
            description: 'Builds muscle and improves body strength using weights or resistance'
        },

        {
            id:2,
            exercise: 'Cardio Training',
            description: 'Boosts heart and lung health by keeping your body moving continuously'
        },

        {
            id: 3,
            exercise: 'Flexibility Training',
            description:'Increases range of motion and reduces injury risk by stretching movements'
        },

        {
            id: 4,
            exercise: 'Balance Training',
            description: 'Improves coordination and stability, especially helpful for core strength '
        }
    ];

    return(
        <div className="program-card">
            {Program.map((prog)=> (
                <div className="programs-info">
                    <div className="prog-exe">
                        <h3>{prog.exercise}</h3>
                    </div>
                    <div className="prog-des">
                        <p>{prog.description}</p>
                    </div>
                    <div className="prog-button">
                        <button>Join Now</button>
                    </div>
                </div>
            ))}
        </div>

    );


}

export default ProgramsCard;