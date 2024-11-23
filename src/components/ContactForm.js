import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';

function ContactForm({ addFeedback, currentFeedback, updateFeedback }) {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '', rating: 0 });

  useEffect(() => {
    if (currentFeedback) {
      setFeedback(currentFeedback);
    } else {
      setFeedback({ name: '', email: '', message: '', rating: 0 });
    }
  }, [currentFeedback]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentFeedback) {
      updateFeedback(feedback);
    } else {
      addFeedback(feedback);
    }
    setFeedback({ name: '', email: '', message: '', rating: 0 });
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  return (
    <animated.div style={formAnimation}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={feedback.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Rating</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            min="1"
            max="5"
            value={feedback.rating}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {currentFeedback ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </animated.div>
  );
}

export default ContactForm;