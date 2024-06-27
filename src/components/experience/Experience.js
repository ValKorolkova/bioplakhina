import { Col, Container, Row } from "react-bootstrap";
import "./experience.css";
import publicPhoto from "./public.jpg"
import { Accordion } from "../accordion/Accordion";

function Experience() {
   
    return (
        <div className="about-container">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Опыт работы</h2>
                <div className="line-title"></div>
            </div>
        <div className="experience-title-container">
            <h2 className="lora-regular main-section-title exrerience-title">Мой талант <span className="lora-regular exrerience-description">- это рассказывать о сложных явлениях простым и понятным языком.</span></h2>
        </div>
        <Container fluid>
            <Row>
                <Col lg={12} xl={6} >
                    <img className="public-photo" src={publicPhoto} alt="Public speaking "/>
                </Col>
                <Col lg={12} xl={6}>
                <div className="accordion-experience-container">
                    <p className="lora-italic experience-text">Я люблю биологию и преподавание, открывать ученикам разные грани предмета, показывая всю красоту биологии и ее смежных областей.</p>
                    <Accordion />
                </div>
                </Col>
            </Row>
        </Container>

        </div>
    )
}
export default Experience;