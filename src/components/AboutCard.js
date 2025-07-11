import './AboutContentStyles.css';

const AboutCard = (props) => {
  let certifications = [];

  try {
    if (props.certifications) {
      certifications = JSON.parse(props.certifications);
    }
  } catch (e) {
    console.error("Invalid certifications JSON:", e);
  }

  return (
    <div className="about">
      <div className="about-content-wrapper">
        {/* Center: Summary */}
        <div className="summary">
          <h1>About myself</h1>
          <p>{props.text}</p>
        </div>

        {/* Right: Certifications */}
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
  );
};

export default AboutCard;
