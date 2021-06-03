import "./projects.scss";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="container">
                <div className="item weather">
                    <h1>🌞 ⛈</h1>
                    <h3>Weather App</h3>
                </div>
                <div className="item dev">
                    <h1>💻 📇</h1>
                    <h3>Developer Connector</h3>
                </div>
                <div className="item trabajos">
                    <h1>🖋 💼</h1>
                    <h3>Trabajos Esenciales</h3>
                </div>
            </div>
        </div>
    )
}
