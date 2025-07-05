const ExperienceCard=(props)=>{
    return(
        <ul>
            <li>
                <h2>{props.company}</h2>
                <h3>{props.designation}</h3>
                <h4>{props.description}</h4>
                <p>From: {props.from_date} To: {props.to_date}</p>
            </li>
        </ul>
    );
}
export default ExperienceCard;      