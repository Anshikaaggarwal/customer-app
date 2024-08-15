import React from 'react'
import './Home.css'
import Footer from './Footer.js'
import super1 from '../images/super1.jpeg'
import super2 from '../images/super2.jpeg'
import build1 from '../images/build1.jpeg'

export const Home = () => {
  return (
    <div className="container">
    <div className='page1'>
      <div className="left-section">
        <div className="profile-card">
          <img src={build1} />
        </div>
      </div>
      <div className="right-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className='featureleft'>
            <div className="feature">
              <h3>AI Assistant</h3>
              <p>AI enabled personal assistant to help to easily create and modify your shopping list.</p>
            </div>
            <div className="feature">
              <h3>Easy Store Navigation</h3>
              <p>Navigate through stores easily with quick location information of your desired products.</p>
            </div>
          </div>
          <div className='featureright'>
            <div className="feature">
              <h3>Queueless Checkout</h3>
              <p>Checkout or go to try rooms without waiting in lines.</p>
            </div>
            <div className="feature">
              <h3>Online Try On</h3>
              <p>Virtually try on the products without going to the store.</p>
            </div>
            {/* <a href="#" className="explore-link">Explore All Tools &rarr;</a> */}
          </div>
        </div>
      </div>
    </div>
  


    {/* New Section */}
    <div className="new-section">
      <div className="content-left">
        <h2>Our AI Assistant</h2>
        <p>
          Helps you make your shopping list easily through personalised suggestions and easy modification. 
          Navigate easily in stores through our innovative location feature!
        </p>
        <button className="download-button">Start Now</button>
      </div>
      <div className="content-right">
        <img
          src={super1}
          alt="image 1"
          className="image1"
        />
        <img
          src={super2}
          alt="image 2"
          className="image2"
        />
      </div>
    </div>
    {/* <Footer/> */}
  </div>
  )
}
export default Home;






