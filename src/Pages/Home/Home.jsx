import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="presentation-container">
        <div className="content-container">
          <h1 className="main-title">Prenez en main votre capital santé</h1>
          <p className="introduction">
            Découvrez une approche holistique du bien-être et de la relaxation
            dans notre premier cabinet de réflexologie.
          </p>
        </div>
      </div>

      <Link to="/Reflexologie" className="button-link">
        <button className="cta-button">En savoir plus</button>
      </Link>
    </section>
  );
}

export default Home;
