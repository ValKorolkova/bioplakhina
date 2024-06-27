import { Col, Container, Row } from "react-bootstrap";
import plakhina from "./Plakhina_cut.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./firstPage.css";
import ButtonOne from "../buttons/ButtonOne";

function FirstPage(){
    return(
        <Container fluid className="p-0 first-page-container" >
            <Row className="first-container">
                <Col lg={6} xl={4} className="text-center img-container">
                        <img src={plakhina} alt="Daria Plakhina" className="img-fluid mb-3 img-plakhina"/>
                </Col>
                <Col lg={6} xl={8} className="d-flex flex-column justify-content-center align-items-center quote-first-page-container">
                        <h1 className="quote-first-page cormorant-medium">“Мне нравится вкладывать силы и время в развитие учеников”</h1>
                    <div className="btn-join">
                       <ButtonOne />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default FirstPage;