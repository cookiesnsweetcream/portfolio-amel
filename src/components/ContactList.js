import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ContactList({ feedbacks }) {
  return (
    <ListGroup>
      {feedbacks.map((feedback) => (
        <ListGroup.Item key={feedback.id} className="mb-3">
          <h5>{feedback.name}</h5>
          <p>Email: {feedback.email}</p>
          <p>Message: {feedback.message}</p>
          <p>Rating: {'⭐'.repeat(feedback.rating)}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ContactList;
