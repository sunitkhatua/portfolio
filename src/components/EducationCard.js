import "./AboutContentStyles.css";

const formatDate = (str) => {
  if (!str) return "";
  const [year, month] = str.split("-");
  return `${month}-${year.slice(2)}`; // Format: MM-YY
};

const EducationCard = ({ edu }) => {
  const formattedDate = edu.currently_studying
    ? "Present"
    : formatDate(edu.to_date);

  return (
    <div className="education-card">
      <h3 className="education-college">{edu.college}</h3>
      <p className="education-degree">{edu.degree}</p>
      <div className="education-footer">
        <span>{formattedDate}</span>
        <span className="cgpa">CGPA: {edu.score}</span>
      </div>
    </div>
  );
};

export default EducationCard;
