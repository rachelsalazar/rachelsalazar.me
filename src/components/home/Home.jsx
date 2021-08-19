import "./home.scss"
import { useState } from "react";

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
            </div>
            <div className="right">
                <div className="wrapper">
                  <span className="intro">
                    <h2>I'm</h2>
                    <span className="drop-shadow">
                      <img className="rachel" src="assets/rachel-salazar.png" alt="" />
                    </span>
                    <h3>a Front-End <span onClick={handleClick} className="dev"> {isClicked ? <pre>👩🏼‍💻</pre> : <span>Developer.</span>}</span></h3>
                  </span>            
                </div>
            </div>
        </div>
    )
}
