import { Link } from "react-router-dom";
import "./footer.css";
import instagram from "./Instagram.png";
import telegram from "./Telegram.png";
import whatsup from "./Whatsup.png"
import { Col, Container, Row } from "react-bootstrap";


function Footer() {

    return(
        <div>
            <div className="footer-line"></div>
            <Container>
                
            <nav className="footerContainer">
            <Row>
                <Col xl={4} className="footer-contact-container lora-regular">
                    <a href="mailto:bioplakhina@mail.ru" className="mail-link">bioplakhina@mail.ru</a>
                    <p>+382 67 123456</p>
                </Col>
                <Col xl={4} className="footer-logo-container">
                    <Link to="/" className="logo-bioplakhina lora-regular">Bioplakhina</Link>
                </Col>
                <Col xl={4} className="footer-social-container">
                    <img className="footer-social" src={instagram} alt="instagram"/>
                    <img className="footer-social" src={telegram} alt="telegram"/>
                    <img src={whatsup} alt="whatsup"/>
                </Col>
                </Row>
            </nav>
            
            </Container>
            </div>
           
     
        
    )
    
}
export default Footer;