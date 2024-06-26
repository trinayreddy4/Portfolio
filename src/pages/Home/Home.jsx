import React from 'react'
import Header from '../../components/Header/Header'
import Intro from './Intro'
import About from './About'
import Certifications from './Certifications'
import CodingProfiles from './CodingProfiles'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
const Home = () => {
  return (
    <div>
        <Header/>
        <div
            className='bg-primary px-40 sm:px-5'
        >
            <Intro/>
            <About/>
            <Certifications/>
            <CodingProfiles/>
            <Contact/>
            <Footer/>
            <LeftSider/>
        </div>
    </div>
  )
}

export default Home