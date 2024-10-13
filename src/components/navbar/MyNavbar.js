import { useState } from "react";
import {
    Link,
} from "react-router-dom";


function MyNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return(
        <nav className="myNavbar-container">
            {/* <div className="logo-bioplakhina lora-regular">Bioplakhina</div> */}
            <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
            <Link to="/about" className="nav-link lora-regular">Обо мне</Link>
            <Link to="/study" className="nav-link lora-regular">Обучение</Link>
            <Link to="/" className="logo-bioplakhina lora-regular logo-burger-menu">Bioplakhina</Link>
            <Link to="/review" className="nav-link lora-regular">Отзывы</Link>
            <a href=" https://www.researchgate.net/profile/Daria-Plakhina/research" target="_blank" rel="noopener noreferrer" className="nav-link lora-regular">Мои статьи</a>
            </div>
        </nav>
    )
}
export default MyNavbar;