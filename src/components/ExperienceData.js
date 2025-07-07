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

  // Returns current date in YYYY-MM format (e.g. 2025-07)
  const getTodayMMYYYY = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${year}-${month}`;
  };

  // Converts "2024-03" -> "Mar, 2024"
  const formatMonthYear = (ym) => {
    if (!ym) return "";
    const [year, month] = ym.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${monthNames[monthIndex]}, ${year}`;
  };

  return (
    <div>
      <h1>Experience</h1>
      <div>
        {experienceData.length > 0 ? (
          experienceData.map((exp, index) => {
            const fromDateFormatted = formatMonthYear(exp.from_date);
            const rawToDate = exp.currently_working ? getTodayMMYYYY() : exp.to_date;
            const toDateFormatted = exp.currently_working ? "Present" : formatMonthYear(rawToDate);

            return (
              <ExperienceCard
                key={index}
                company={exp.company}
                designation={exp.designation}
                description={exp.description}
                from_date={fromDateFormatted}
                to_date={toDateFormatted}
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
