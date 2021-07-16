import { useState } from 'react';
import "./education.scss";

export default function Education() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: '1',
            image: 'assets/kal.png',
            alt: 'Kal Academy Logo',
            title: 'Full Stack Web Development Bootcamp',
            desc: 'Kal Academy is dedicated to providing women and underrepresented minorities with the skills and tools they need to thrive in today’s tech industry. 1. Built web application using Angular and Typescript 2. Built real-world full stack application using React and MongoDb 3. Integrated app with React Router and Redux 4. Deployed application to cloud 5. Learned basic and advanced Algorithms and Data Structures'
        },
        {
            id: '2',
            image: 'assets/code-fellows.png',
            alt: 'Code Fellows Logo',
            title: 'Front End Web Development Bootcamp',
            desc: 'Developed a well-rounded foundation of skills necessary for modern web development. These skills include HTML, CSS, and JavaScript coding; utilizing Git workflow processes, project organization, designing with wireframing and employing introductory Agile development methods.'
        },
        {
            id: '3',
            image: 'assets/london-app.png',
            alt: 'London App Brewery Logo',
            title: 'Full Stack Web Development Certificate',
            desc: 'Topics Learned: Front-End Web Development, HTML 5, CSS 3, Bootstrap 4, Javascript ES6, DOM Manipulation, jQuery, Bash Command Line, Git, GitHub and Version Control, Backend Web Development, Node.js, NPM, Express.js, EJS, REST, APIs, Databases, SQL, MongoDB, Mongoose, Authentication, Firebase, React.js, React Hooks, Web Design, Deployment with GitHub Pages, Heroku and MongoDB Atlas'
        },
    ];

    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainter">
                                <div className="imgContainer">
                                    <img src={d.image} alt={d.alt}/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/green-squiggle.png" className="green-squiggle" alt="" />
            {currentSlide > 0 && <img src="assets/left-arrow.png" className="arrow left" alt="Left arrow" onClick={() => handleClick("left")}/>}
            {currentSlide < 2 && <img src="assets/right-arrow.png" className="arrow right" alt="Right arrow" onClick={() => handleClick("right")}/>}
        </div>
    )
}
