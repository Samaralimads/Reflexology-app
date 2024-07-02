import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="presentation-container">
        <div className="content-container">
          <h1 className="main-title">Prenez en main votre capital santé</h1>
          <p className="introduction">
            Experience a holistic approach to wellness and relaxation at our
            premier reflexology practice.
          </p>
        </div>
      </div>

      <Link to="/Reflexologie" className="button-link">
        <button className="cta-button">Learn More</button>
      </Link>
    </section>
  );
}

export default Home;
