import React from 'react'
import './Footer.css'
import youtubeicon from '../../assets/youtube_icon.png'
import twittericon from '../../assets/twitter_icon.png'
import instagramicon from '../../assets/instagram_icon.png'
import facebookicon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebookicon} alt="fb" />
        <img src={instagramicon} alt="insta" />
        <img src={twittericon} alt="twitx" />
        <img src={youtubeicon} alt="ytb" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© Netflix Inc 2024</p>
    </div>
  )
}

export default Footer