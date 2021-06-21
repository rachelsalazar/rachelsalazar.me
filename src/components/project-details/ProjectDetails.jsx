import "./project-details.scss";

export default function ProjectDetails({project}) {
  
  return (
    <div className="detail">
      <h1>This is my Weather App</h1>
      <p>this is the details about my weather app.</p>
      <p>{project}</p>
    </div>
  )
}
