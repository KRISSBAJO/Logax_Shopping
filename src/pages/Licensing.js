import React from 'react';
import './Licensing.css'; // Import your custom CSS file

const Licensing = () => {
  return (
    <section className="licensing">
      <div className="licensing-card">
        <h2>Licensing and Awards</h2>
        <p>
          LogaXP is proud to hold a range of licenses that reflect our commitment to quality and compliance. We operate with a strong sense of ethics and integrity, ensuring that our products meet the highest industry standards.
        </p>
        <p>Our dedication to excellence has been recognized with numerous awards and accolades. These honors motivate us to continue pushing boundaries and innovating in the technology sector.</p>
        <h3>Licenses</h3>
        <ul>
          <li>Business License</li>
          <li>Industry-specific Licenses</li>
          <li>Environmental Permits</li>
          <li>Health and Safety Certifications</li>
        </ul>
        <h3>Awards and Accolades</h3>
        <p>
          We take pride in our commitment to excellence and innovation. Our dedication has been recognized through various awards and accolades, including:
        </p>
        <ul>
          <li>Technology Innovation Award</li>
          <li>Customer Satisfaction Award</li>
          <li>Industry Leadership Award</li>
        </ul>
      </div>
      <div className="events">
        <h3>Upcoming Events</h3>
        <div className="event">
          <h4>New York Tech Expo</h4>
          <p>Date: September 15th, 2023</p>
          <p>Location: New York City</p>
        </div>
        <div className="event">
          <h4>Berlin Tech Conference</h4>
          <p>Date: October 10th, 2023</p>
          <p>Location: Berlin, Germany</p>
        </div>
        <div className="event">
          <h4>UK IT Summit</h4>
          <p>Date: November 5th, 2023</p>
          <p>Location: London, United Kingdom</p>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
