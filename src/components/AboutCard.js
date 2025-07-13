import './AboutContentStyles.css';
import Skills from './Skills';
import Education from './Education';

const AboutCard = (props) => {
  let certifications = [];
  let awards = [];

  try {
    // Handle certifications parsing
    certifications = Array.isArray(props.certifications)
      ? props.certifications
      : JSON.parse(props.certifications || "[]");

    // Handle awards parsing
    if (Array.isArray(props.awards)) {
      awards = props.awards;
    } else if (
      typeof props.awards === "string" &&
      props.awards.trim().startsWith("[") &&
      props.awards.trim().endsWith("]")
    ) {
      awards = JSON.parse(props.awards);
    } else if (typeof props.awards === "string" && props.awards.trim() !== "") {
      awards = [props.awards]; // Wrap single string in array
    }
  } catch (e) {
    console.error("Invalid JSON in certifications or awards:", e);
  }

  const email = "sunitkhatua320@gmail.com";

  return (
    <>
      <div className="about">
        <div className="about-content-wrapper">
          {/* Left: Skills */}
          <Skills />

          {/* Center: Summary */}
          <div className="summary">
            <h1>About myself</h1>
            <p>{props.text}</p>
          </div>

          {/* Right: Education + Certifications */}
          <div className="right-panel">
            <Education email={email} />

            {certifications.length > 0 && (
              <div className="certification-panel">
                <h2>Certifications</h2>
                <ul>
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      <a
                        href={cert.verification_mail}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cert.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔽 Awards section below all */}
      {awards.length > 0 && (
        <div className="awards-panel">
          <h2>Awards</h2>
          <ul>
            {awards
              .flatMap((award, index) =>
                award
                  .split(".")
                  .map((sentence) => sentence.trim())
                  .filter((sentence) => sentence.length > 0)
                  .map((sentence, subIndex) => (
                    <li key={`${index}-${subIndex}`}>{sentence}.</li>
                  ))
              )}
          </ul>
        </div>
      )}
    </>
  );
};

export default AboutCard;
