import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center text-center">
                    <Col size={12} sm={12}>
                        <div className="social-icon">
                            {/* Instagram */}
                            <a href="https://www.instagram.com/ameliaprmsti_/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/ameliakp16/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            {/* GitHub */}
                            <a href="https://github.com/cookiesnsweetcream" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;