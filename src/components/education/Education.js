import { Container, Row, Col } from "react-bootstrap";
import camera from "./camera.png";
import book from "./book.png";
import clock from "./clock.png";
import "./education.css"
import Button from "../button/Button";
import { useEffect, useRef } from "react";

function Education() {
    const sectionRef = useRef([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("showNow");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold :0.1,
            }
        );
        const currentSectionRef = sectionRef.current;

        currentSectionRef.forEach((ref, index) => {
            if (ref) {
                ref.classList.add(`delay-${index}`);
                observer.observe(ref);
            }
        });
        return () => {
            currentSectionRef.forEach(ref => {
                if (ref) {
                    observer.unobserve (ref);
                }
            });
        };
    }, []);


    return (
        <div className="about-container">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Как проходит обучение</h2>
                <div className="line-title"></div>
            </div>
            <Container fluid>
                <Row>
                    <Col xl={4}>
                    <div className="education-container">
                        <img ref={el => sectionRef.current[0] = el} className="education-icon" src={camera} alt="icon-camera"/>
                        <p className="education-title lora-medium">Онлайн формат обучения</p>
                        <p className="education-description lora-regular">Занятия проходят в Zoom, каждое занятие записывается.</p>
                    </div>
                    </Col>
                    <Col xl={4}>
                    <div className="education-container">
                        <img ref={el => sectionRef.current[1] = el} className="education-icon" src={book} alt="icon-camera"/>
                        <p className="education-title lora-medium">Индивидуальный подход</p>
                        <p className="education-description lora-regular">Каждое занятие готовится индивидуально в соответсвии с целями и возможностями ученика</p>
                    </div>
                    </Col>
                    <Col xl={4}>
                    <div className="education-container">
                        <img ref={el => sectionRef.current[2] = el} className="education-icon" src={clock} alt="icon-camera"/>
                        <p className="education-title lora-medium">Удобное время занятий</p>
                        <p className="education-description lora-regular">Создается индивидуальное расписание занятий, которое согласовывается с учеником.</p>
                    </div>
                    </Col>
                </Row>
            </Container>
            <div className="education-btn-container">
                <Button />
            </div>
        </div>
    )
}
export default Education