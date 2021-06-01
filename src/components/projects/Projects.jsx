import "./projects.scss";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>projects</h1>
            <div className="container">
                <div className="item">
                    <img src="/assets/weather-app.png" alt="weather app screenshot"/>
                    <h3>weather app</h3>
                </div>
                <div className="item">
                    <img src="/assets/weather-app.png" alt="weather app screenshot"/>
                    <h3>developer connector</h3>
                </div>
                <div className="item">
                    <img src="/assets/weather-app.png" alt="weather app screenshot"/>
                    <h3>developer connector</h3>
                </div>
                <div className="item">
                    <img src="/assets/weather-app.png" alt="weather app screenshot"/>
                    <h3>developer connector</h3>
                </div>
            </div>
        </div>
    )
}
