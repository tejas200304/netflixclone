import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import herobanner from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import playicon from '../../assets/play_icon.png'
import infoicon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
          <img src={herobanner} alt="banner" className='banner-img'/>
          <div className="hero-caption">
            <img src={herotitle} alt="title" className='caption-img' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, alias architecto ea illo debitis recusandae rerum molestias tempora excepturi repellat perferendis impedit explicabo natus sapiente voluptas totam quaerat nostrum atque?</p>
            <div className="hero-btns">
              <button className='btn'><img src={playicon} alt="" />Play</button>            
              <button  className='btn dark-btn'><img src={infoicon} alt="" />More Info</button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top Picks for You"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home