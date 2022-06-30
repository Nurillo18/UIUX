import React from 'react'
import ReadyImg from "../../Assets/Images/ready__img.png"
import "./ready.scss"
function Ready() {
  return (
    <section className='get-ready-section'>
        <div className="container">
            <div className="ready">
                <div className="ready__content">
                    <h2 className='ready__title'>Ready to get start <br /> with UIUXer?</h2>
                    <div className='ready__text-wrapper'>
                        <p className="ready__text">Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.</p>
                        <a className='ready__link' href="#link">Get Start Now</a>
                    </div>
                </div>
                <img className='ready__content-img' src={ReadyImg} alt="Ready img"  width="637" height="463"/>
            </div>
        </div>
    </section>
  )
}

export default Ready