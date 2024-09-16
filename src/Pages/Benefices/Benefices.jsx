import React from "react";
import "./Benefices.css";

function Benefices() {
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

      <h2>Avantages de la Réflexologie</h2>
      <section className="advantages-section">
        <div className="card">
          <div className="card-img">
            <img src="/stress-relief.png" alt="stress-img" />
            <div className="desc">
              <h3 className="primary-text">Réduction du Stress :</h3>
              <p className="secondary-text">
                En ciblant des points réflexes spécifiques sur les pieds, la
                réflexologie plantaire peut aider à calmer le système nerveux et
                induire un état de relaxation profonde, réduisant ainsi le
                stress et l'anxiété.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/stress-relief.png" alt="stress-img" />
            <div className="desc">
              <h3 className="primary-text">Amélioration de la circulation :</h3>
              <p className="secondary-text">
                En stimulant la circulation sanguine, la réflexologie peut
                améliorer la distribution d'oxygène et de nutriments aux
                cellules, favorisant ainsi la guérison et la vitalité.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/stress-relief.png" alt="stress-img" />
            <div className="desc">
              <h3 className="primary-text">Soulagement de la douleur :</h3>
              <p className="secondary-text">
                La réflexologie peut soulager la douleur en libérant des
                endorphines et en réduisant les tensions dans les muscles et les
                articulations.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/stress-relief.png" alt="stress-img" />
            <div className="desc">
              <h3 className="primary-text">
                Fonctionnement des Organes Amélioré :
              </h3>
              <p className="secondary-text">
                La stimulation des points réflexes sur les pieds est censée
                améliorer le fonctionnement des organes correspondants, aidant
                ainsi à restaurer l'équilibre et la vitalité du corps.
              </p>
            </div>
          </div>
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

      <h2>Services</h2>
      <section className="services-section">
        <ul class="services">
          <li>
            <a href="" class="service">
              <img src="" class="service-image" alt="" />
              <div class="service-overlay">
                <div class="service-header">
                  <div class="service-header-text">
                    <h3 class="service-title">SOIN PERSONNALISE</h3>
                    <span class="service-status">From 30€</span>
                  </div>
                </div>
                <p class="service-description">
                  Lorem bipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>

        <div className="service">MASSAGE</div>
        <div className="service">CARTE-CADEAU</div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
      </section>
    </div>
  );
}

export default Benefices;
