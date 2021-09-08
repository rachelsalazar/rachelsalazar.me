import "./projects.scss";
import Zoom from 'react-reveal/Zoom';

export default function Projects() {

    const data = [
        {
          id: '1',
          title: '🌞 Weather App ⛈',
          desc: 'Displays the weather of the location the user searched for by accessing the OpenWeatherMap API. I built the back-end service and interface that communicates with the OpenWeatherMap API to display data.',
          technology: 'Technologies: Typescript, Angular, Node.js, Express.js, HTML, CSS'
        },
        {
            id: '2',
            title: '📝 To-Do List ✔️',
            desc: 'A to-do list inspired by the Google Keep app. I utilized React State Hooks to create dynamic components and persisted the user data in MongoDB. I implemented OAuth and the ability to signin with Google using Passport.js.',
            technology: 'Technologies: React, JSX, CSS, Node.js, Express.js, MongoDB, Heroku, Passport.js'
        },
        {
          id: '3',
          title: '♻️ Which Bin? 🗑',
          desc: 'A recycling website built with HTML, CSS, and Javascript that helps you figure out if an item should be placed in the Garbage Bin, Recycle Bin, or Compost Bin.',
          technology: ''
        }
    ];

    return (
        <div className="projects" id="projects">
              <h1>Projects</h1>
              <div className="container">
                <Zoom>
                  <h2>{data[0].title}</h2>
                  <div className="item weather" name="weather">
                      <video controls="true" src="/assets/weather-screen.mov"></video>
                  </div>
                </Zoom>                
                <p>{data[0].desc}</p>
                <Zoom>
                  <h2>{data[1].title}</h2>
                  <div className="item to-do">
                      <video controls="true" src="/assets/to-do-screen.mov"></video>
                  </div>
                </Zoom>                
                <p>{data[1].desc}</p>
                <Zoom>
                  <h2>{data[2].title}</h2>
                  <div className="item which-bin">
                      <video controls="true" src="/assets/which-bin-screen.mov"></video>
                  </div>                  
                </Zoom>                
                <p>{data[2].desc}</p>
            </div>
        </div>
    )
}
