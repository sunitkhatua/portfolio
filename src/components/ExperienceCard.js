import "./ExperienceCard.css";
const ExperienceCard = (props) => {
  const sentences = props.description
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
  return (
    <ul>
      <li className="experience-card">
        <div className="experience-header">
          <h2>{props.company}</h2>
          <h2>
            {props.from_date} - {props.to_date}
          </h2>
        </div>
        <h3>{props.designation}</h3>
        <ul className="description-list">
          {sentences.map((line, idx) => (
            <li key={idx} className="description-item">
              • {line}.
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
export default ExperienceCard;
