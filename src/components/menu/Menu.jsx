import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <div className={"menu " + (menuOpen && "activeMenu") }>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#home">Home 🏡</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">Projects 🛠</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#education">Education 📚</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact ✍🏼</a>
                </li>
                <li>
                    <a href="/assets/rachel-salazar-resume.pdf" target="_blank">Resume 📄</a>
                </li>
            </ul>
        </div>
    )
}
