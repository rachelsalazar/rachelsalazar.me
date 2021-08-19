import { useState, } from 'react';
import "./education.scss";
import Reveal from 'react-reveal/Reveal';

export default function Education() {
  
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: '1',
            image: 'assets/kal.png',
            alt: 'Kal Academy Logo',
            title: 'Full Stack Web Development Bootcamp',
            desc: 'Kal Academy provides women and underrepresented minorities with the skills and tools they need to thrive in today’s tech industry. I built web applications using Angular and Typescript and real-world full stack applications using React and MongoDb. I integrated the apps with React Router and Redux and deployed the applications to the cloud. I also learned basic and advanced Algorithms and Data Structures.'
        },
        {
            id: '2',
            image: 'assets/code-fellows.png',
            alt: 'Code Fellows Logo',
            title: 'Front-End Web Development Bootcamp',
            desc: 'At Code Fellows I developed a well-rounded foundation of skills necessary for modern front-end web development. These skills include HTML, CSS, JavaScript, and jQuery. I utilized the Git workflow processes, learned project organization, designed wireframes and employed Agile development methods.'
        },
        {
            id: '3',
            image: 'assets/london-app.png',
            alt: 'London App Brewery Logo',
            title: 'Full Stack Web Development Certificate',
            desc: 'This Udemy certificate program cemented my skills in HTML 5, CSS 3, Bootstrap 4, Javascript ES6, DOM Manipulation, jQuery, Bash Command Line, Git, GitHub and Version Control, Node.js, NPM, Express.js, EJS, REST, APIs, Databases, SQL, MongoDB, Mongoose, Authentication and Authorization, React.js, React Hooks, Web Design, Deployment with GitHub Pages, Heroku and MongoDB Atlas.'
        },
    ];

    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
      <Reveal>
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="top">
                            <div className="leftContainter">
                                <div className="imgContainer">
                                    <img src={d.image} alt={d.alt}/>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {currentSlide > 0 && <img src="assets/left-arrow.png" className="arrow left" alt="Left arrow" onClick={() => handleClick("left")}/>}
            {currentSlide < 2 && <img src="assets/right-arrow.png" className="arrow right" alt="Right arrow" onClick={() => handleClick("right")}/>}
        </div>
      </Reveal>
    )
}
