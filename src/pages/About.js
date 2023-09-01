import React from 'react';

import './About.css'; // Import your custom CSS file

const About = () => {
  const managementStaff = [
    {
      title: "CEO - Christopher Adebajo",
      bio: "Christopher Adebajo is a visionary leader with a passion for technology...",
      image: "/assets/christopher.jpeg",
    },
    {
      title: "Executive Director Finance - Jason Bajo",
      bio: "Jason Bajo brings a wealth of financial expertise to our team...",
      image: "/assets/jason.png",
    },
    {
      title: "Company Secretary - Jude Long",
      bio: "Jude Long ensures the smooth functioning of our operations...",
      image: "/assets/jude.png",
    },
    {
      title: "Executive Director Marketing - Mary Long",
      bio: "Mary Long is a marketing expert with a passion for technology...",
      image: "/assets/mary.png",

    },
    {
      title: "Executive Director Sales - Isaac Garba",
      bio: "John Doe is a sales expert with a passion for technology...",
      image: "/assets/john.png",
    },
    {
      title: "Executive Director Operations - Jane Doe",
      bio: "Jane Doe is an operations expert with a passion for technology...",
      image: "/assets/jane.png",

    }
  ];

  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        LogaXP is a next-generation IT product company that specializes in
        building and selling state-of-the-art devices like phones and
        computers. With a focus on innovation and quality, we strive to provide
        cutting-edge technology to our customers.
      </p>
      
      <div className="management-cards">
        {managementStaff.map((staff, index) => (
          <div key={index} className="management-card">
            <div className="management-content">
              <img className="mgtImage" src={staff.image} alt={staff.title} />
              <div className="management-text">
                <h3>{staff.title}</h3>
                <p>{staff.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;