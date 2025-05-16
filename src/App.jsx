import { useState } from 'react'
import './App.css'
import Navbar from './componetns/Navbar'
import Cards from './componetns/cards'

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <div className='header'>
          <div className='header-name'>
            <p className='header-title'>UI/UX Designer</p>
            <p className='header-desc'>Hello,  my name <br /> is Madelyn Torff</p>
            <p className='header-description'>Short text with details about you, what you <br /> do or your professional career. You can add <br /> more information on the about page.</p>
            <div className='header-btn-box'>
              <button className='projects-btn'>Projects</button>
              <button className='linkedin-btn'>LinkedIn</button>
            </div>
          </div>
          <img className='header-img' src="/image.png" alt="" />
        </div>
      </header>
      <main>
        <div className="cards-box">
            <div className="cards-head">
                <p className="cards-title">Projects</p>
                <div className="color"></div>
            </div>
        </div>
        <Cards/>
        <Cards/>
        <Cards/>
      </main>
      <footer>
        <div className='contact-icons'>
          <img className='social-icon' src="/instagram.svg" alt="" />
          <img className='social-icon' src="/fecebok.svg" alt="" />
          <img className='social-icon' src="mail.svg" alt="" />
        </div>
        <p className='footer-text'>Madelyn Torff 2023</p>
      </footer>
    </div>
  )
}


export default App
