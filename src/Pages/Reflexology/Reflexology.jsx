import React from "react";
import "./Reflexology.css";

function Reflexology() {
  return (
    <div className="reflexology-section">
      <section className="intro-section">
        <h1>Libérer le Potentiel de Votre Corps à Travers les Pieds</h1>
        <p>
          La réflexologie plantaire est une technique naturelle et manuelle
          ancestrale de bien-être qui s'appuie sur les capacités d'auto-guérison
          de votre corps. Des pressions rythmées appliquées sur les zones
          réflexes de vos pieds permettent de localiser les tensions et de
          stimuler le retour à l'équilibre dans les organes correspondants.
        </p>
      </section>

      <section className="advantages-section">
        <h2>Avantages de la Réflexologie</h2>
        <div className="circle-card">
          <h3>Réduction du Stress :</h3>
          <p>
            En ciblant des points réflexes spécifiques sur les pieds, la
            réflexologie plantaire peut aider à calmer le système nerveux et
            induire un état de relaxation profonde, réduisant ainsi le stress et
            l'anxiété.
          </p>
        </div>
        <div className="circle-card">
          <h3>Amélioration de la circulation :</h3>
          <p>
            En stimulant la circulation sanguine, la réflexologie peut améliorer
            la distribution d'oxygène et de nutriments aux cellules, favorisant
            ainsi la guérison et la vitalité.
          </p>
        </div>
        <div className="circle-card">
          <h3>Soulagement de la douleur :</h3>
          <p>
            La réflexologie peut soulager la douleur en libérant des endorphines
            et en réduisant les tensions dans les muscles et les articulations.
          </p>
        </div>
        <div className="circle-card">
          <h3>Fonctionnement des Organes Amélioré :</h3>
          <p>
            La stimulation des points réflexes sur les pieds est censée
            améliorer le fonctionnement des organes correspondants, aidant ainsi
            à restaurer l'équilibre et la vitalité du corps.
          </p>
        </div>
      </section>

      <section className="expectations-section">
        <div>
          <h2>À Quoi S'Attendre lors d'une Séance de Réflexologie Plantaire</h2>
          <p>
            Pendant une séance de réflexologie plantaire, vous vous allongerez
            généralement sur une chaise confortable ou une table de massage. Le
            réflexologue utilisera une variété de techniques pour appliquer une
            pression sur les points réflexes de vos pieds, ajustant la pression
            en fonction de votre niveau de confort et de vos besoins
            individuels. Les séances durent généralement entre 30 et 60 minutes.
          </p>
          <div>
            <img src="add.png" alt="studioimg1" className="studio-img" />
            <img src="add.png" alt="studioimg2" className="studio-img" />
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Services</h2>
        <div className="service">SOIN PERSONNALISE</div>
        <div className="service">MASSAGE</div>
        <div className="service">CARTE-CADEAU</div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
      </section>
    </div>
  );
}

export default Reflexology;
