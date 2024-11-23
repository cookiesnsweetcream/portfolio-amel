import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Footer } from './components/Footer';
import { Project } from "./components/Project";
import ContactSection from './components/ContactSection';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const getInTouchRef = useRef(null); // Tambahkan referensi untuk Get In Touch

  const [feedbacks, setFeedbacks] = useState([]);
  const [currentFeedback, setCurrentFeedback] = useState(null);

  const addFeedback = (feedback) => {
    setFeedbacks([...feedbacks, { ...feedback, id: Date.now() }]);
  };

  const updateFeedback = (updatedFeedback) => {
    setFeedbacks(feedbacks.map((fb) => (fb.id === updatedFeedback.id ? updatedFeedback : fb)));
    setCurrentFeedback(null);
  };

  const handleNavigate = (section) => {
    if (section === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'get-in-touch' && getInTouchRef.current) { // Tambahkan navigasi untuk Get In Touch
      getInTouchRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar onNavigate={handleNavigate} />
      <Banner />
      <div ref={skillsRef}>
        <Skills /> <br />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <section ref={getInTouchRef} id="get-in-touch" className="contact-section py-5"> {/* Tambahkan ID */}
        <Container>
          <h2 className="text-center mb-5 font-weight-bold bg get-in-touch">Get In Touch</h2>
          <div ref={getInTouchRef}>
            <ContactSection
              feedbacks={feedbacks}
              addFeedback={addFeedback}
              currentFeedback={currentFeedback}
              updateFeedback={updateFeedback}
            />
          </div>;

        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;