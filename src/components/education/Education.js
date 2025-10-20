import { Container, Row, Col } from "react-bootstrap";
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
                    <div  className="education-container">
                        <div className="education-icon" ref={el => sectionRef.current[0] = el}>
                        <svg  id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="7" y="8.5" width="7" height="7" rx="1.61538" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M14,13.164l2.00892,1.23832A.65.65,0,0,0,17,13.849V10.151a.65.65,0,0,0-.99107-.55333L14,10.836" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.62892,17.16368a8.99979,8.99979,0,1,1,2.20679,2.2067l-2.83727.63045Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M0,0H24V24H0Z" fill="none"/></svg>
                       </div>
                        <p className="education-title lora-medium">Онлайн формат обучения</p>
                        <p className="education-description lora-regular">Занятия проходят в Zoom, каждое занятие записывается, темы и домашнее задание всегда можно найти в таблице, к которой есть доступ у учеников и их родителей.</p>
                    </div>
                    </Col>
                    <Col xl={4}>
                    <div  className="education-container">
                        <div className="education-icon" ref={el => sectionRef.current[1] = el}>
                        <svg  id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,9.71368v4.63025a.71816.71816,0,0,1-.682.70785A6.56908,6.56908,0,0,0,12,16a6.569,6.569,0,0,0-3.318-.94822A.71816.71816,0,0,1,8,14.34393V9.71368a.70938.70938,0,0,1,.75658-.71239A7.04515,7.04515,0,0,1,12,9.93421a7.04515,7.04515,0,0,1,3.24342-.93292A.70938.70938,0,0,1,16,9.71368Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12,9.93377V16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M0,0H24V24H0Z" fill="none"/></svg>
                        </div>
                        <p className="education-title lora-medium">Индивидуальный подход</p>
                        <p className="education-description lora-regular">Каждое занятие готовится индивидуально в соответсвии с целями и возможностями ученика(ов).</p>
                    </div>
                    </Col>
                    <Col xl={4}>
                    <div  className="education-container">
                        <div className="education-icon" ref={el => sectionRef.current[2] = el}>
                        <svg  id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3a9,9,0,1,1-9,9,9,9,0,0,1,9-9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><polyline points="12.5 7 12.5 12.5 8 12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><rect x="0.00001" width="24" height="24" fill="none"/></svg>
                        </div>
                        <p className="education-title lora-medium">Удобное время занятий</p>
                        <p className="education-description lora-regular">Создается индивидуальное расписание занятий, которое согласовывается с учеником.
                        Групповые занятия так же стоят в удобное для всех время.</p>
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