import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./firstPage.css";
import Button from "../button/Button";

function FirstPage(){
    return(
<Container fluid className="p-0 first-page-container">
  <Row className="first-container">
    <Col sm={12} className="d-flex flex-column justify-content-center align-items-center quote-first-page-container">
      <h1 className="quote-first-page cormorant-medium">
        “Мне нравится вкладывать силы и время в развитие учеников”
      </h1>
      <div className="btn-join">
        <Button>Присоединиться</Button>
      </div>
    </Col>
  </Row>
</Container>
    )
}
export default FirstPage;