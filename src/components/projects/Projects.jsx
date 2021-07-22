import "./projects.scss";
import { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';

export default function Projects() {

    const [click, setClick] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tech, setTech] = useState('');

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

    function handleClick(project) {

        if (project === 'weather') {
            setTitle(data[0].title);
            setDesc(data[0].desc);
            setTech(data[0].technology);
        } else if (project === 'dev') {
            setTitle(data[1].title);
            setDesc(data[1].desc);
            setTech(data[1].technology);
        } else if (project === 'trabajos') {
            setTitle(data[2].title);
            setDesc(data[2].desc);
            setTech(data[2].technology);
        }

        click ? setClick(false) : setClick(true);
    }


    return (
        <div className="projects" id="projects">
            <img src="assets/pink-squiggle.png" className="pink-squiggle" alt=""/>
            <h1>Projects</h1>
            <div className="container">
                <div className="item weather" name="weather" onClick={() => handleClick('weather')}>
                    <h1 className="emojis weather">🌞 ⛈</h1>
                    <h3 className="weather">Weather App</h3>
                </div>
                <div className="item dev" onClick={() => handleClick('dev')}>
                    <h1 className="emojis dev">💻 📇</h1>
                    <h3 className="dev">Developer Connector</h3>
                </div>
                <div className="item trabajos" onClick={() => handleClick('trabajos')}>
                    <h1 className="emojis trabajos">📝 ✔️</h1>
                    <h3 className="trabajos">To-Do List</h3>
                </div>
                <div className={click ? "item-detail active-project" : "item-detail"}>
                  <CloseIcon className="closeIcon" onClick={() => handleClick()}/>
                    <div className="detail">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <p className="techs">{tech}</p>
                    </div>
                </div>
            </div>
            <img src="assets/blue-squiggle.png" className="blue-squiggle" alt=""/>
        </div>
    )
}
