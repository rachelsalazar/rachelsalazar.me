import "./home.scss"
import { useState } from "react";


export default function Home() {

    const [hover, setHover] = useState(false);

    function handleHover() {
        setHover(true);
    }

    function handleMouseOut() {
        setHover(false);
    }

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/profile-pic.png" alt="image of rachel salazar"/>
                </div>
            </div>
            <div className="right">
                <div className="speechContainer">
                    <img src="/assets/speech-bubble.png" alt="thank you for stopping by my website. enjoy your visit"/>
                </div>

                <div className="wrapper">
                    <h2>i'm</h2>
                    <h1>rachel salazar,</h1>
                    <h3>a fullstack software <span onMouseOver={handleHover} onMouseOut={handleMouseOut} className="dev"> {hover ? <pre>   👩🏼‍💻           </pre> : <u>developer.</u>}</span></h3>
                    <a href="#projects">
                        <img src="/assets/down-arrow.png" alt="down arrow"/>
                    </a>               
                </div>
            </div>
        </div>
    )
}
