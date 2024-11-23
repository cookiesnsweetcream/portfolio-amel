import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/html-logo-144.png";
import css from "../assets/css-logo-144.png";
import js from "../assets/javascript-144.png";
import bootstrap from "../assets/bootstrap-logo-144.png";

export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx text-center">
                            <h2>My Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="skill-item">
                                    <img src={html} alt="logo html" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={css} alt="logo css" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={js} alt="logo js" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={bootstrap} alt="logo bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
} 

export default Skills;