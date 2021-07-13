import "./projects.scss";
import ProjectDetails from "../project-details/ProjectDetails";
import { useState } from "react";

export default function Projects() {

    const [click, setClick] = useState(false);
    let project = "";

    function handleClick(event) {
        let info = event.target.className;

        click ? setClick(false) : setClick(true);
        console.log(click);

        switch (info) {
            case "item weather" || "weather":
                project = "weather";
                break;
            case "item dev" || "dev":
                project = "dev";
                break;
            case "item trabajos" || "trabajos":
                project = "trabajos";
                break;
            default:
                break;
        }
    }
    return (
        <div className="projects" id="projects">
            <img src="assets/pink-squiggle.png" className="squiggle" alt=""/>
            <h1>Projects</h1>
            <div className="container">
                <div className="item weather" name="weather" onClick={handleClick}>
                    <h1 className="weather">🌞 ⛈</h1>
                    <h3 className="weather">Weather App</h3>
                </div>
                <div className="item dev" onClick={handleClick}>
                    <h1 className="dev">💻 📇</h1>
                    <h3 className="dev">Developer Connector</h3>
                </div>
                <div className="item trabajos" onClick={handleClick}>
                    <h1 className="trabajos">🖋 💼</h1>
                    <h3 className="trabajos">Trabajos Esenciales</h3>
                </div>
                <div className={click ? "item-detail active" : "item-detail"}>
                    <ProjectDetails project={project} />
                </div>
            </div>
        </div>
    )
}
