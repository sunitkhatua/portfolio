import './AboutContentStyles.css'

const AboutCard = (props) => {
  return (
    <div className="about">
      <div className="summary">
        <h1>About me</h1>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}
export default AboutCard;