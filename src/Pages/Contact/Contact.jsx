import React from "react";
import "./Contact.css";

function Contact() {
  const API_KEY = import.meta.env.VITE_APP_MAP_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJzd18ech95kcRHewygM4yDE0&key=${API_KEY}`;

  return (
    <section className="contact-section" id="contact">
      <div className="map-container">
        <div>
          <h2>Visit Us</h2>

          <p>110 Quai Saint-Ivy</p>
          <p>Saint-Pierre-Quiberon </p>
          <p>Phone: (33) 06 76 47 15 50</p>
          <p>Email: get the email</p>
        </div>

        <iframe
          width="550"
          height="310"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
