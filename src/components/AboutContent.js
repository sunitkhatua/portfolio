import "./AboutContentStyles.css";
import { useEffect, useState } from "react";
import AboutCard from "./AboutCard";

const AboutContent = () => {
  const [otherData, setOtherData] = useState(null);
  const email = "sunitkhatua320@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:8000/get-other-details?email=${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch other details");
        return res.json();
      })
      .then((data) => setOtherData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [email]);

  return (
    <div className="about">
      <div className="summary">
        {otherData && otherData.summary ? (
          <AboutCard text={otherData.summary} />
        ) : (
          <p>No Other Details found</p>
        )}
      </div>
    </div>
  );
};

export default AboutContent;
