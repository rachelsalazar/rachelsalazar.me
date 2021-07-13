import "./education.scss";

export default function Education() {
    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainter">
                                <div className="imgContainer">
                                    <img src="assets/kal.png" alt="Kal Academy Logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <p>
                                Kal Academy is dedicated to providing women and underrepresented minorities with the skills and tools they need to thrive in today’s tech industry.
                                <br></br><br></br>1. Built web application using Angular and Typescript
                                <br></br>2. Built real-world full stack application using React and MongoDb
                                <br></br>3. Integrated app with React Router and Redux
                                <br></br>4. Deployed application to cloud
                                <br></br>5. Learned basic and advanced Algorithms and Data Structures
                            </p>
                            <button>Certificate</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/left-arrow.png" className="arrow left" alt="Left arrow"/>
            <img src="assets/right-arrow.png" className="arrow right" alt="Right arrow"/>
        </div>
    )
}
