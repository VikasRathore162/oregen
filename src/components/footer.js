import React from 'react'
import styled from 'styled-components';
import logofooter from "../images/Oregen_Logo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <img className="footerlogo" src={logofooter} />
          
        </div>
        <div className="columns">
        <h4> About Oregen</h4>
          <h6>We are offering a new way of learning i.e. concept of GAMIFIED LEARNING</h6>
        </div>
        <div className="columns">
          <h4> Market Place</h4>
          <h6></h6>
        </div>
        <div className="columns">
          <h4> Contact Us</h4>
          <h6>Email : Oregen111@gmail.com</h6>
        </div>
        <div className="Line"></div>
        <div className="credit">
          <h6>All Rights Reserved @2021. Design & Developed by <span style={{ color: "#FF2E00" }}>Oregen</span></h6>
        </div>
      </div>
      
    </>
  )
}

export default Footer