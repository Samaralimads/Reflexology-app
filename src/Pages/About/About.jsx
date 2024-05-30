import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-grid">
        <div className="section-image-container">
          <img
            alt="Reflexologist"
            className="section-image"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
        <div>
          <div className="section-label">Meet the Reflexologist</div>
          <h2 className="section-title">Dominique, Certified Reflexologist</h2>
          <p className="section-description">
            With over x years of experience in the field of reflexology, Jane
            Doe is a highly skilled and compassionate practitioner dedicated to
            helping her clients achieve optimal health and well-being. She is a
            certified reflexologist, trained in the latest techniques and
            approaches to provide a personalized and transformative experience.
          </p>
          <div className="cta-buttons">
            <a href="#">
              <button lassName="learn-more-button">Learn More</button>
            </a>
            <a href="#">
              <button lassName="book-now-button">Book Now</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
