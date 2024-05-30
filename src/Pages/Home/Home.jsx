import React from "react";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="presentation-container">
        <div className="content-container">
          <h1 className="main-title">
            Unlock Your Body's Potential with Reflexology
          </h1>
          <p className="introduction">
            Experience the transformative power of reflexology and embark on a
            journey to optimal health and well-being.
          </p>
        </div>
      </div>

      <div>
        <a href="#">
          <button className="cta-button">Book an Appointment</button>
        </a>
      </div>
      <div>
        <div className="section-label">What is Reflexology?</div>
        <h2 className="section-title">A Holistic Approach to Wellness</h2>
        <p className="section-description">
          Reflexology is a complementary therapy that focuses on the stimulation
          of specific reflex points on the feet, hands, and ears to promote the
          body's natural healing process. By addressing these reflex points,
          reflexology can help alleviate various physical and emotional
          imbalances, leading to improved overall well-being.
        </p>
      </div>
    </section>
  );
}

export default Home;
