import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReviewData } from "./ReviewData";
import "./review.css"

function Review () {

    const [review] = useState(ReviewData);
    const parseText = (text) => {
        const parts = text.split(/(\[highlight\]|\[\/highlight\])/);
        let isHighlighted = false;
        return parts.map((part, index) => {
            if (part === '[highlight]') {
                isHighlighted = true;
                return null;
            } else if (part === '[/highlight]') {
                isHighlighted = false;
                return null;
            } else {
                return isHighlighted ? (
                   <span key={index} className="selected-text">{part}</span>
                ) : (
                <span key={index}>{part}</span>
            );
            }
        })
    }


    return (
        <div className="about-container ">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Отзывы моих учеников</h2>
                <div className="line-title"></div>
            </div>
            <Container >
                <div className="scrollContainer rewiew-main-container ">
                <Row className="">
                    <Col sm={10} xl={4} className='review-container'>
                    {review.map((item => {
                        const {id, text, caption} = item;
                        return(
                            <div key={id} className="review-card scrollCard">
                                <div className="review-text lora-regular review_color">{parseText(text)}</div>
                                <p className="review-caption lora-regular review_color">{caption}</p>
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