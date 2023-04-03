import React from 'react'
import './Quest.css'
import img5 from "../images/5.png"

function Quest() {
    return (
        <div>
            <h1 className='hav'>Have any questions?</h1>
            <p className='were'>We’re here to help. Get in touch below
                to ask us anything about Dribbble’s
                course <br /> offerings.</p>
            <div className="box">
                <p className='sak'>
                    Send us a message
                </p>
                <p className='adr'>A Dribbble Education team member
                    is available to answer any questions
                    you have about the course.</p>
                <div className="btns">
                    <button className='btn12'>Register Now</button>
                    <button className='btn22'>Learn more</button>
                </div>
            </div>
            <img className='img5' src={img5} alt="" />
            <div className="container">
                <h1 className='frk'>Frequently asked questions</h1>
                <p className='pilo1'>How does the certified course work? <i>+</i> </p>
                <p className='pilo1'>How is this different from other courses on the market?  <i>+</i> </p>
                <p className='pilo1'>What is the course format?</p>
                <p className='pilo1'>What skill level is required to get started?  <i>+</i> </p>
                <p className='pilo1'>What are the peer/group learning opportunities in the course?  <i>+</i> </p>
                <p className='pilo1'>Are there payment plans available?  <i>+</i> </p>
                <p className='pilo1'>How do I get my company to pay for me?  <i>+</i> </p>
                <p className='pilo1'>What’s the refund policy if I change my mind?  <i>+</i> </p>
                <p className='pilo1'>What form of payments do you accept? </p>
            </div>
        </div>
    )
}

export default Quest