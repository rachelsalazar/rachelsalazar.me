import "./navbar.scss"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + ( menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">hi. 👋🏼 </a>
                </div>
                <div class="icons">
                    <a href="https://www.linkedin.com/in/rachel-e-salazar/" target="blank"><img src="../../assets/linkedin-white.png" alt="linkedin link"/></a>
                    <a href="https://twitter.com/rach_e_l_" target="blank"><img src="../../assets/twitter-white.png" alt="twitter link"/></a>
                    <a href="https://github.com/rachelsalazar" target="blank"><img src="../../assets/github-white.png" alt="github link"/></a>
                </div>
                <div className="right">
                    <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>🍔</span>
                </div>
            </div>
        </div>
    )
}
