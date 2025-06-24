import React from 'react'
import'./About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative eductional journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skill andexperience needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning and personalised mentorship, our programsprepare aspiring educators to make a meaningful impact in classrooms, schools and communities</p>
            <p>Whether you aspire tobeome a teacher, administrator, counselor or educational leader, our diverse range of programs offer the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About