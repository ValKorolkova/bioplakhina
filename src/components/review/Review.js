import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReviewData } from "./ReviewData";
import "./review.css"

function Review () {

    const [review] = useState(ReviewData)


    return (
        <div className="about-container">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Отзывы моих учеников</h2>
                <div className="line-title"></div>
            </div>
            <Container>
                <div className="scrollContainer ">
                <Row>
                    <Col sm={10} xl={4} className='review-container'>
                    {review.map((item => {
                        const {id, text, caption} = item;
                        return(
                            <div key={id} className="review-card scrollCard">
                                <div className="review-text lora-regular">{text}</div>
                                <p className="review-caption lora-regular">{caption}</p>
                            </div>
                        )
                    }))}

                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}
export default Review;