import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceData = () => {
  const [experienceData, setExperienceData] = useState([]);
  const email = "sunitkhatua320@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:8000/get-experience/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch experience data");
        return res.json();
      })
      .then((data) => setExperienceData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [email]);

  const getTodayMMYYYY = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${year}-${month}`;
  };

  return (
    <div>
      <h1>Experience</h1>
      <div>
        {experienceData.length > 0 ? (
          experienceData.map((exp, index) => {
            const toDate = exp.currently_working ? getTodayMMYYYY() : exp.to_date;

            return (
              <ExperienceCard
                key={index}
                company={exp.company}
                designation={exp.designation}
                description ={exp.description}
                from_date={exp.from_date}
                to_date={toDate}
              />
            );
          })
        ) : (
          <p>No experience found</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceData;
