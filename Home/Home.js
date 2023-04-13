import "./Home.scss"
import React, { useEffect, useState } from 'react';
import LogoTitle from "../../assets/images/logo1.png"
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from "react-loaders";
// import Logo from './Logo/Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['t','u','l'," ",'T','i','n','g','r','e']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']


    const textAnimate = () =>{
        return setTimeout(()=>{
          setLetterClass('text-animate-hover')
        }, 4000)
    }

    useEffect(()=>{
        textAnimate();
    },[])

  return (
    <>
    <div className='container home-page'>
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`} >i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`} >'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </h1>
            <h2>Frontend Developer </h2>
            <Link to="/contact" className='flat-button'>CONTACT</Link>
        </div>
        {/* <Logo/> */}
    </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home