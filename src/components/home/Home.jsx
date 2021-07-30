import "./home.scss"
import { useState } from "react";
import Swing from 'react-reveal/Swing';

export default function Home() {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        isClicked ? setIsClicked(false) : setIsClicked(true);
    }

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/profile-pic.png" alt="rachel salazar"/>
                </div>
                <Swing delay={2000}>
                  <div className="triangle-left"></div>
                </Swing>
            </div>
            <div className="right">
                <div className="wrapper">
                  <span className="intro">
                    <h2>I'm</h2>
                    <span className="drop-shadow">
                      <img className="rachel" src="assets/rachel-salazar.png" alt="" />
                    </span>
                    <h3>a Front-End <span onClick={handleClick} className="dev"> {isClicked ? <pre> 👩🏼‍💻</pre> : <u>Developer.</u>}</span></h3>
                  </span>
                  <Swing delay={3000}>
                      <div className="triangle-right"></div>
                  </Swing>
                    <a href="#projects">
                        <img src="/assets/down-arrow.png" alt="down arrow"/>
                    </a>               
                </div>
            </div>
            <div className="triangle-bottom"></div> 
        </div>
    )
}
