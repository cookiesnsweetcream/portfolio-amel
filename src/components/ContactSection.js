import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function ContactSection({ feedbacks, addFeedback, currentFeedback, updateFeedback }) {
  return (
    <section id="get-in-touch" className="contact-section py-5">
      <Container>
        <Row className="justify-content-center g-4">
          {/* Form Section */}
          <Col lg={5} className="feedback-container">
            <h3 className="text-center">Feedback Form</h3>
            <ContactForm
              addFeedback={addFeedback}
              currentFeedback={currentFeedback}
              updateFeedback={updateFeedback}
            />
          </Col>
          
          {/* Feedback List Section */}
          <Col lg={5} className="feedback-container">
            <h3 className="text-center">Feedback List</h3>
            <ContactList feedbacks={feedbacks} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
