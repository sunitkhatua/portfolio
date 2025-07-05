import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
// import WorkCardData from "./WorkCardData";
import { useEffect, useState } from "react";


const Work = () => {
  const [projectData, setProjectData] = useState([]);
  const email = "sunitkhatua320@gmail.com";

  useEffect(()=>{
    fetch(`http://localhost:8000/get-project/${email}`)
    .then((res)=>{
      if (!res.ok)
        throw new Error("Failed to fetch project data");
      return res.json();
    })
    .then((data)=>setProjectData(data))
    .catch((err)=>console.error("Fetch error". err));
  },[email]);

return(
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {projectData.length>0 ? (projectData.map((proj, index)=>(
            <WorkCard
                key={index}
                // imgsrc="https://via.placeholder.com/300"
                title={proj.title}
                text={proj.description}
                view={proj.github}
                />
          ))
        ):(<p>No project found</p>)}
        </div>
    </div>
    );
};

export default Work