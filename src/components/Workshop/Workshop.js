import React from 'react'
import './Workshop.css'
import img4 from "../images/4.png"

function Workshop() {
    return (
        <div>
            <h1 className='work1'>Workshops & Free Webinars</h1>
            <h2 className='lvl1'>Level up your design skills with our live
                and highly interactive workshops <br /> —featuring
                must-have insights from your favorite design
                leaders</h2>
            <img className='img4' src={img4} alt="" />
            <p className='jon'>New York native Jon Contino is an influential
                staple in the design and branding community.
                In this interactive crash course, you’ll
                explore the process of logo development through
                custom lettering. Then, map the entire process
                while using your inspiration references to flesh
                out your design and sketch your ideas. Design
                alongside Jon, get feedback and leave the course
                with a new brand identity!</p>
            <p className='p1'>Workshop</p>
            <p className='p2'>Wed, April 26, 2023</p>
            <div className="btns">
                <button className='btn1'>Register Now</button>
                <button className='btn2'>Learn more</button>
            </div>
        </div>
    )
}

export default Workshop