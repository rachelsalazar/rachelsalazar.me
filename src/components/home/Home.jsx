import "./home.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Home() {

  return (
    <div className="home" id="home">
      <div className="text">
        <h1>I'm Rachel Salazar, a Front-End Developer.</h1>
        <h2 className="small-margin">Projects:
          <a href="https://github.com/fordf/RecyclingFinalProject"> Which Bin,</a>
          <a href="https://github.com/rachelsalazar/dev-connector"> Developer Connector,</a>
          <a href="https://github.com/rachelsalazar/keeper"> To-Do List</a>
        </h2>
        <h2>Education:
          <a href="https://www.kalacademy.org/home/index"> Kal Academy,</a>
          <a href="https://www.codefellows.org/"> Code Fellows</a>
        </h2>
        <h2 className="small-margin">
          <a href="/assets/rachel-salazar-resume.pdf">Resume</a>
        </h2>
        <h2 className="small-margin">
          <a href="mailto:ret1992@gmail.com">ret1992@gmail.com</a>
        </h2>
        <h2>
          <a href="https://www.linkedin.com/in/rachel-e-salazar/" target="blank" className="icon"><LinkedInIcon /></a>
          <a href="https://twitter.com/rach_e_l_" target="blank" className="icon"><TwitterIcon /></a>
          <a href="https://github.com/rachelsalazar" target="blank" className="icon"><GitHubIcon /></a>
        </h2>
      </div>
    </div>
  )
}
