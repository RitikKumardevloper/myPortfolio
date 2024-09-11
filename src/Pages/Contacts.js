import React from 'react';
import './Contact.css'; // Add a separate CSS file for Contact styles

const Contacts = () => {
  return (
    <>
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ritikkumar0001web" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com/@Ritikkumarweb" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/RitikKumardevloper" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    </>
  );
};

export default Contacts;

 
