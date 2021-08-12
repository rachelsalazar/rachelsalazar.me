import "./projects.scss";
import { useState } from "react";
import Zoom from 'react-reveal/Zoom';

export default function Projects({darkMode, setDarkMode}) {

    const data = [
        {
          id: '1',
          title: '🌞 Weather App ⛈',
          desc: 'Displays the weather of the location the user searched for by accessing the OpenWeatherMap API. I built the back-end service and interface that communicates with the OpenWeatherMap API to display data.',
          technology: 'Technologies: Typescript, Angular, Node.js, Express.js, HTML, CSS'
        },
        {
          id: '2',
          title: '💻 Developer Connector 📇',
          desc: 'A LinkedIn inspired single-page web application that connects Software Developers through searching capabilities to find other developers in the application. I developed front-end using React enabling developers to have profiles, news feeds, comment on and like posts, etc. I used Passport to authenticate users using JWT and built the back-end database in MongoDB.',
          technology: 'Technologies: React, JSX, CSS, Node.js, Express.js, MongoDB, Passport.js, JWT, Postman, Redux, Git'
        },
        {
            id: '3',
            title: '📝 To-Do List ✔️',
            desc: 'A to-do list inspired by the Google Keep app. I utilized React State Hooks to create dynamic components and persisted the user data in MongoDB. I implemented OAuth and the ability to signin with Google using Passport.js.',
            technology: 'Technologies: React, JSX, CSS, Node.js, Express.js, MongoDB, Heroku, Passport.js'
        }
    ];

    const handleMouseOver = () => {
      setDarkMode(false);
    }

    return (
        <div className={"projects " + ( darkMode && "dark-mode")} id="projects" onMouseOver={handleMouseOver}>
            <Zoom >
              <h1>Projects</h1>
            </Zoom>
              <div className="container">
                <Zoom>
                  <div className="item weather" name="weather">
                      <video controls="true" src="/assets/weather-screen.mov"></video>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="item to-do">
                      <video controls="true" src="/assets/to-do-screen.mov"></video>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="item witch-bin">
                      <video controls="true" src="/assets/witch-bin-screen.mov"></video>
                  </div>
                </Zoom>
            </div>
        </div>
    )
}
