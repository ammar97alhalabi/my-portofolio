import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Ammar.png';
import './index.scss';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
const Home =()=>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['m','m','a','r']
    const jobArray=['S','o','f','t','w','a','r','e',' ','E','n','g','.']
    

    
        useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover');
        },4000);
        },[])
    //      setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return(
        <><div className="container home-page">
            <div className="text-zone">
                <h1><span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="Developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>
                <h2>FullStack Dev. / Mobile Dev. / Flutter Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>

            </div>

        </div><Loader type='ball-scale-ripple-multiple' /></>
    )
}
export default Home