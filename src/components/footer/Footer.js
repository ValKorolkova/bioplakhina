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
                    <a href="mailto:bioplakhina@mail.ru" className="mail-link">daria.plahina@gmail.com</a>
                    <p>+7 (916) 709 27 30</p>
                </Col>
                <Col xl={4} className="footer-logo-container">
                    <Link to="/" className="logo-bioplakhina lora-regular">Bioplakhina</Link>
                </Col>
                <Col xl={4} className="footer-social-container">
                    <img className="footer-social" src={instagram} alt="instagram"/>
                    <Link to="https://t.me/virusofknowledge"><img className="footer-social" src={telegram} alt="telegram"/></Link>
                    <img src={whatsup} alt="whatsup"/>
                </Col>
                </Row>
            </nav>
            
            </Container>
            </div>
           
     
        
    )
    
}
export default Footer;