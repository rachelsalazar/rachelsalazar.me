import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <div className={"menu " + (menuOpen && "active") }>
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
                    <a href="#contact">Contact 📨</a>
                </li>
            </ul>
        </div>
    )
}
