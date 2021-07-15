import "./navbar.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + ( menuOpen && "activeMenu")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">hi. <span className="hand">👋🏼</span></a>
                </div>
                <div class="icons">
                    <a href="https://www.linkedin.com/in/rachel-e-salazar/" target="blank"><LinkedInIcon /></a>
                    <a href="https://twitter.com/rach_e_l_" target="blank"><TwitterIcon /></a>
                    <a href="https://github.com/rachelsalazar" target="blank"><GitHubIcon /></a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
