import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
      
        <img
          src="https://images.anime-pictures.net/ff2/ff269ed89953c27e3d3a8323b7b593ef.jpg?if=ANIME-PICTURES.NET_-_147576-2500x325-pokemon-pokemon+rse-nintendo-piplup-snivy-oshawott.jpg" // Replace with your image URL
          alt=""
          className="full-width-image" // Add a CSS class for styling
        />
        
      </div>
      <p className="copy">
          &copy; {new Date().getFullYear()} Pokemon Squad. All Rights Reserved.
        </p>
    </footer>
  );
};

export default Footer;
