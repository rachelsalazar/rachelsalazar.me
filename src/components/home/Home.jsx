import "./home.scss"
import { useState } from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Home() {

    const [isClicked, setIsClicked] = useState(false);

    const textRef = useRef();

    useEffect(() => {
        const myElement = textRef.current;
        init(myElement, {
            showCursor: true,
            cursorChar: "✍🏼",
            loop: false,
            startDelay: 1500,
            strings: ["enjoy your visit! "] })
    },[])

    function handleClick() {
        isClicked ? setIsClicked(false) : setIsClicked(true);
    }

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/profile-pic1.png" alt="image of rachel salazar"/>
                </div>
            </div>
            <div className="right">
                <div className="speechContainer">
                    <img src="/assets/speech-bubble1.png" alt="speech bubble"/>
                    <h3>Thank you for stopping<br/>by my portfolio. Please<br/><span ref={textRef}></span></h3>
                </div>

                <div className="wrapper">
                    <h2>I'm</h2>
                    <h1>Rachel Salazar,</h1>
                    <h3>a Fullstack Software <span onClick={handleClick} className="dev"> {isClicked ? <pre> 👩🏼‍💻</pre> : <u>Developer.</u>}</span></h3>
                    <a href="#projects">
                        <img src="/assets/down-arrow.png" alt="down arrow"/>
                    </a>               
                </div>
            </div>
        </div>
    )
}
