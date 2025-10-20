
import { Col, Container, Row } from "react-bootstrap";
import laptop from "./laptop.png";
import hat from './hat.png';
import exam from './school-exam.png';
import school from './school-clock.png';
import "./about.css"
import { useEffect, useRef } from "react";
import about_photo from './about_photo.JPG';


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

        const currentTitleRefs = titleRefs.current;

        currentTitleRefs.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });
        return () => {
            currentTitleRefs.forEach(ref => {
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
        <div className="about-intro">
             <div className="about-text">
                 <h2 className="lora-regular main-section-title"> Зоолог, генетик, учитель биологии, репетитор по биологии</h2>
                 
             </div>
             <div className="about-photo-container">
                <img src={about_photo} alt="profile" className="about-photo" />
                
             </div>
            
        </div>
        <Container fluid>
        <Row>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[0] = el} className="about-title-container">
                <p className="lora-medium about-title-number">13 лет</p>
                <p className="lora-regular about-title-text">преподавания</p>
            </div>
            <div className="about-description-container">
                <div className="icon-container">
                    <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.99906,21H5.00094a1.99972,1.99972,0,0,1-1.92281-2.549l1.06431-3.72568A1,1,0,0,1,5.104,14H18.896a1,1,0,0,1,.96153.72532L20.92187,18.451A1.99972,1.99972,0,0,1,18.99906,21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="10" y1="18" x2="14" y2="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17,3.93421a7.04515,7.04515,0,0,1,3.24342-.93292A.70938.70938,0,0,1,21,3.71368V8.34393a.71816.71816,0,0,1-.682.70785A6.56908,6.56908,0,0,0,17,10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17,3.93421a7.04515,7.04515,0,0,0-3.24342-.93292A.70938.70938,0,0,0,13,3.71368V8.34393a.71816.71816,0,0,0,.682.70785A6.56908,6.56908,0,0,1,17,10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="17" y1="3.93421" x2="17" y2="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5,14H5.5A1.5,1.5,0,0,1,4,12.5V5A2,2,0,0,1,6,3H9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M0,0H24V24H0Z" fill="none"/></svg>
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
                <div className="icon-container">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g strokeLinecap="round" strokeWidth="1.419" stroke="currentColor" fill="none" strokeLinejoin="round"><path d="M9.703,4.095l-6.174,3.43c-1.298,0.721 -1.298,2.587 0,3.308l6.174,3.43c1.428,0.793 3.165,0.793 4.594,0l6.174,-3.43c1.298,-0.721 1.298,-2.587 0,-3.308l-6.174,-3.43c-1.429,-0.793 -3.165,-0.793 -4.594,-8.88178e-16Z" /><path strokeWidth="1.4167" d="M5.991,12.2v3.924c0,0.949 0.475,1.834 1.264,2.359l1.607,1.069c1.901,1.264 4.375,1.264 6.275,0l1.607,-1.069c0.79,-0.525 1.264,-1.411 1.264,-2.359v-3.924" /> </g><path fill="none" d="M0,0h24v24h-24Z" /></svg>
                </div>
                <p className="lora-regular about-description">Поступили в МГУ (биофак и психфак), медицинские ВУЗы Москвы и Санкт-Петербурга после индивидуальных занятий. </p>
            </div>
            </Col>
        </Row>
        <Row>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[2] = el} className="about-title-container">
                <p className="lora-medium about-title-number">70+</p>
                <p className="lora-regular about-title-text">баллов</p>
            </div>
            <div className="about-description-container">
                <div className="icon-container">
                   <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,9h1.2918a2.99994,2.99994,0,0,1,1.34162.31671l.654.327a3,3,0,0,1,1.15453,1.01919L22,13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16,18.82843V19a1.5,1.5,0,0,1-1.5,1.5H3.5A1.5,1.5,0,0,1,2,19V4.5A1.5,1.5,0,0,1,3.5,3h11A1.5,1.5,0,0,1,16,4.5v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20,21l-4.68314-2.54244A4.0001,4.0001,0,0,1,13.94415,17.23l-2.66962-3.82882a1.52749,1.52749,0,0,1,.17289-1.95375h0a1.52751,1.52751,0,0,1,2.16-.00022l2.0536,2.05277L17,13.50006" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="5" y1="14" x2="7" y2="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="5" y1="17" x2="9" y2="17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.28222,9.2H8.70667" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><polyline points="9 10 7.56 6 6.44 6 5 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><rect width="24" height="24" fill="none"/></svg>
                </div>
                <p className="lora-regular about-description">Получают в среднем мои ученики после сдачи ОГЭ, ЕГЭ и ДВИ (доп. вступительный экзамен, которое проводится при поступлении в МГУ).</p>
            </div>
            </Col>
            <Col xl={6} className="about-col">
            <div ref={el => titleRefs.current[3] = el} className="about-title-container">
                <p className="lora-medium about-title-number">2000+</p>
                <p className="lora-regular about-title-text">уроков</p>
            </div>
            <div className="about-description-container">
                <div className="icon-container">
                    <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,20V10.41667a2,2,0,0,1,.92322-1.68539l3-1.91667a2,2,0,0,1,2.15356,0l3,1.91667A2,2,0,0,1,17,10.41667v1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><polyline points="12 2 16 2 16 4.5 12 4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="12" y1="6.5" x2="12" y2="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Shape_3077" data-name="Shape 3077" d="M11.9995,10.875a.12455.12455,0,1,0,.00191,0H11.9995" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="2" y1="20" x2="12" y2="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3,20V11a1,1,0,0,1,1-1H7.04464" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21,12V11a1,1,0,0,0-1-1H16.95536" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><circle cx="18" cy="18" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.90484,16.65179v1.55874l1.22863.74947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12,15h-.5a1,1,0,0,0-1,1v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M0,0H24V24H0Z" fill="none"/></svg>
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