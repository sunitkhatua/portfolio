import "./AboutContentStyles.css";

const SkillsCard = ({ category, skills }) => {
  return (
    <div className="skill-category-card">
      <h3 className="skill-category-title">{category}</h3>
      <p className="skill-list">{skills.join(", ")}</p>
    </div>
  );
};

export default SkillsCard;
