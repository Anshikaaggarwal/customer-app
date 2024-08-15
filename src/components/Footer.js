import React from 'react'
import '../components/Footer.css'

export const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-section company-info">
      <h4>About Us</h4>
      <p>Our company is dedicated to providing top-quality products and services. Shop with us for the best in customer satisfaction.</p>
    </div>
    
    <div class="footer-section customer-service">
      <h4>Customer Service</h4>
      <ul>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>

    <div class="footer-section quick-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>

    <div class="footer-section social-media">
      <h4>Follow Us</h4>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Linkedin</a></li>
      </ul>
    </div>
  </div>
</footer>

  )
}

export default Footer;
