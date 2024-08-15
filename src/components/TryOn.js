import React from 'react'
import './TryOn.css'
import tryvid1 from '../images/tryvid1.gif'
import sh1 from '../images/sh1.png'
import sh2 from '../images/sh2.png'
import sh3 from '../images/sh3.png'
import ear1 from '../images/ear1.png'
import ear2 from '../images/ear2.png'
import Footer from '../components/Footer.js'

export const TryOn = () => {
  return (
    <div className='trycontain'>
        <div className='trybody'>
            <div className="trypage">
                <div className="content">
                    <div className="title">
                        <h1>Virtual Try On</h1>
                        <p>Try different products virtually without leaving your home! Choose styles, sizes and much more without any trouble.</p>
                        <button className="get-started-btn">Get Started</button>
                    </div>
                    <div className="image-section">
                        <div className="mainpic">
                            <div className="clothes">
                                <img src={tryvid1} className='gif' alt="Clothes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='prodbody'>
            <h1>Explore</h1>
            <div className='prods'>
                <a href='https://aayushi-sinha.github.io/AR_Shades-1/'>
                    <button className='prodtry'>
                        <img src={sh1} alt='shades' className='sh1'/>
                    </button>
                </a>
                <a href='https://aayushi-sinha.github.io/AR_Shades-2/'>
                    <button className='prodtry'>
                        <img src={sh2} alt='shades' className='sh2'/>
                    </button>
                </a>
                <a href='https://aayushi-sinha.github.io/AR_Shades-3/'>
                    <button className='prodtry'>
                        <img src={sh3} alt='shades' className='sh3'/>
                    </button>
                </a>
                <a href='https://aayushi-sinha.github.io/AR_Earring-1/'>
                    <button className='prodtry'>
                        <img src={ear1} alt='earring' className='ear1'/>
                    </button>
                </a>
                <a href='https://aayushi-sinha.github.io/AR_Earring-2/'>
                    <button className='prodtry'>
                        <img src={ear2} alt='earring' className='ear2'/>
                    </button>
                </a>
            </div>
            <button className="seemore">See More</button>
        </div>
        <Footer/>
    </div>
    
  )
}
export default TryOn;