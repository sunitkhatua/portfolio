import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const email = "sunitkhatua320@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:8000/get-skills?email=${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch other details");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [email]);

  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul></ul>
    </div>
  );
};
export default Skills;
