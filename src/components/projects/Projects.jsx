import "./projects.scss";
import { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';

export default function Projects() {

    const [click, setClick] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const data = [
        {
          id: '1',
          title: 'Weather App',
          desc: 'This is the details about my weather app.'
        },
        {
          id: '2',
          title: 'Developer Connector',
          desc: 'This is the details about dev connector.'
        },
        {
            id: '3',
            title: 'Trabajos Esenciales',
            desc: 'This is the details about trabajos'
        }
    ];

    function handleClick(project) {

        if (project === 'weather') {
            setTitle(data[0].title);
            setDesc(data[0].desc);
        } else if (project === 'dev') {
            setTitle(data[1].title);
            setDesc(data[1].desc);
        } else if (project === 'trabajos') {
            setTitle(data[2].title);
            setDesc(data[2].desc);
        }

        click ? setClick(false) : setClick(true);
    }


    return (
        <div className="projects" id="projects">
            <img src="assets/pink-squiggle.png" className="pink-squiggle" alt=""/>
            <h1>Projects</h1>
            <div className="container">
                <div className="item weather" name="weather" onClick={() => handleClick('weather')}>
                    <h1 className="weather">🌞 ⛈</h1>
                    <h3 className="weather">Weather App</h3>
                </div>
                <div className="item dev" onClick={() => handleClick('dev')}>
                    <h1 className="dev">💻 📇</h1>
                    <h3 className="dev">Developer Connector</h3>
                </div>
                <div className="item trabajos" onClick={() => handleClick('trabajos')}>
                    <h1 className="trabajos">🖋 💼</h1>
                    <h3 className="trabajos">Trabajos Esenciales</h3>
                </div>
                <div className={click ? "item-detail active-project" : "item-detail"}>
                    <div className="detail">
                        <CloseIcon className="closeIcon" onClick={() => handleClick()}/>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <img src="assets/blue-squiggle.png" className="blue-squiggle" alt=""/>
        </div>
    )
}
