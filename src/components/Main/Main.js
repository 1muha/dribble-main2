import React from 'react'
import './Main.css'
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"


function Main() {
    return (
        <div className='mains'>
            <div className='main1'>
                <h1 className='has1'>What our students are saying</h1>
                <p className='pil1'>This is a great opportunity to work
                    online and in-depth with your design
                    heroes. The instructors are world-class,
                    the community is amazing, and we’re
                    inspired to add to our portfolios every
                    week. <span className='span1'>It was amazing to see the level of
                        feedback our mentors provided.</span></p>
                <img className='img1' src={img1} alt="" />
                <h3 className='has3'>Jeffrey Bauer</h3>
                <p className='nwe'>
                    New York, NY
                </p>
            </div>
            <div className='main2'>
                <p className='pil2'>Dribbble courses are
                    always incredibly informative for me.
                    <span className='span2'>It was fascinating to hear from industry
                        experts and gain insight into their
                        experience.</span>I particularly enjoy the live
                    classes; I love how involved and accessible
                    they are. I find it a near-perfect balance
                    of independence and instruction.</p>
                <img className='img2' src={img2} alt="" />
                <h3 className='has32'>Jeffrey Bauer</h3>
                <p className='nwe2'>
                    New York, NY
                </p>
            </div>
            <div className='main3'>
                <p className='pil3'>Dribbble courses are
                    always incredibly informative for me.
                    <span className='span3'>It was fascinating to hear from industry
                        experts and gain insight into their
                        experience.</span>I particularly enjoy the live
                    classes; I love how involved and accessible
                    they are. I find it a near-perfect balance
                    of independence and instruction.</p>
                <img className='img3' src={img3} alt="" />
                <h3 className='has33'>Jeffrey Bauer</h3>
                <p className='nwe3'>
                    New York, NY
                </p>
            </div>
        </div>
    )
}

export default Main