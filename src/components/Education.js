import { useEffect, useState } from "react";
import EducationCard from "./EducationCard";
import "./AboutContentStyles.css";

const Education = ({ email }) => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/get-education/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch education");
        return res.json();
      })
      .then((data) => setEducationData(data))
      .catch((err) => console.error("Error loading education:", err));
  }, [email]);

  return (
    <div className="education-panel">
      <h2 className="education-heading">Education</h2>
      {educationData.map((edu, index) => (
        <EducationCard key={index} edu={edu} />
      ))}
    </div>
  );
};

export default Education;
