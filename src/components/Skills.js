import { useEffect, useState } from "react";
import AboutCard from "./AboutCard";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const email = "sunitkhatua320@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:8000/get-skills/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [email]);

  return (
    <div className="skills">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <AboutCard skills={skills} />
    </div>
  );
};

export default Skills;
