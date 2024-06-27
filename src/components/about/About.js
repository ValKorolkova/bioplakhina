
import { Col, Container, Row } from "react-bootstrap";
import laptop from "./laptop.png";
import hat from './hat.png';
import exam from './exam.png';
import school from './school-clock.png';
import "./about.css"
import { useEffect, useRef } from "react";

function About () {

    const titleRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        titleRefs.current.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });
        return () => {
            titleRefs.current.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
       <div className="about-container">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Обо мне</h2>
                <div className="line-title"></div>
            </div>
        <div>
            <h2 className="lora-regular main-section-title">Зоолог, репетитор по биологии</h2>
        </div>
        <Container fluid>
        <Row>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[0] = el} className="about-title-container">
                <p className="lora-medium about-title-number">12 лет</p>
                <p className="lora-regular about-title-text">преподавания</p>
            </div>
            <div className="about-description-container">
                <div>
                    <img src={laptop} alt="icon" className="about-img"/>
                </div>
                <p className="lora-regular about-description">Преподаю онлайн и очно, работаю учителем в школе.</p>
            </div>
            </Col>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[1] = el} className="about-title-container">
                <p className="lora-medium about-title-number">50+</p>
                <p className="lora-regular about-title-text">учеников</p>
            </div>
            <div className="about-description-container">
                <div>
                    <img src={hat} alt="icon" className="about-img"/>
                </div>
                <p className="lora-regular about-description">Поступили в МГУ (биофак и психфак), медицинские ВУЗы Москвы и Санкт-Петербурга. </p>
            </div>
            </Col>
        </Row>
        <Row>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[2] = el} className="about-title-container">
                <p className="lora-medium about-title-number">75+</p>
                <p className="lora-regular about-title-text">баллов</p>
            </div>
            <div className="about-description-container">
                <div>
                    <img src={exam} alt="icon" className="about-img"/>
                </div>
                <p className="lora-regular about-description">Получают в среднем мои ученики после сдачи ОГЭ, ЕГЭ и ДВИ (доп. вступительный экзамен, которое проводится при поступлении в МГУ).</p>
            </div>
            </Col>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[3] = el} className="about-title-container">
                <p className="lora-medium about-title-number">1000</p>
                <p className="lora-regular about-title-text">уроков</p>
            </div>
            <div className="about-description-container">
                <div>
                    <img src={school} alt="icon" className="about-img"/>
                </div>
                <p className="lora-regular about-description">Проведено с учениками за последние несколько лет.</p>
            </div>
            </Col>
        </Row>
       
       </Container>
       </div>
    )
}
export default About;