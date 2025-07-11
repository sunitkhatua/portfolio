import { useEffect, useState } from "react";
import SkillsCard from "./SkillsCard";
import "./AboutContentStyles.css";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const email = "sunitkhatua320@gmail.com";

  useEffect(() => {
    console.log("📡 Calling skills API...");
    fetch(`http://localhost:8000/get-skills/${email}`)
      .then((res) => {
        console.log("✅ Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Skills data:", data);
        setSkillsData(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching skills:", err);
      });
  }, []);

  return (
    <div className="skills-wrapper">
      <div className="skills-panel">
        <h2 className="skills-heading">Skills</h2>
        {skillsData.length > 0 ? (
          skillsData.map((item, index) => (
            <SkillsCard
              key={index}
              category={item.category}
              skills={item.skills}
            />
          ))
        ) : (
          <p style={{ color: "white" }}>No skills found</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
