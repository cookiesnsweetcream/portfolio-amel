import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import greenfoot from "../assets/pickUpthePatient.jpg";
import rekamMedis from "../assets/rekamMedis.jpg";
import figma from "../assets/figma.png";

export const Project = () => {
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
        <section className="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="projects-bx text-center">
                            <h2>My Projects</h2>
                            <Carousel responsive={responsive} infinite={true} className="project-slider">
                                <div className="project-item greenfoot">
                                    <img src={greenfoot} alt="Game Menjemput Pasien" />
                                    <h5>Pick Up the Patient Game</h5>
                                </div>
                                <div className="project-item">
                                    <img src={rekamMedis} alt="Aplikasi Rekam Medis" />
                                    <h5>Medical Records App</h5>
                                </div>
                                <div className="project-item">
                                    <img src={figma} alt="Desain Website UMKM" />
                                    <h5>UMKM Website Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
} 

export default Project;