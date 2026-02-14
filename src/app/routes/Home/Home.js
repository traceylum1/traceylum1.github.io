import './Home.css';
import { NavLink } from 'react-router';
import { useState } from 'react';
import Header from '../../Components/Header';
import sunset from '../../Images/marina-sunset.jpg';
import sunrise from '../../Images/belize-sunrise.jpeg';
import beach from '../../Images/ocean-beach.jpeg';
import lakelouise from '../../Images/lake-louise.jpeg'
import banff from '../../Images/banff.jpeg';
import richmond from '../../Images/richmond.jpeg';
import discoball from '../../Images/discoball.png';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";



function Home() {
  const [ index, setIndex ] = useState(0);
  const images = [ [sunset, "Richmond Marina"], [sunrise, "San Pedro"], [beach, "Ocean Beach"], [lakelouise, "Lake Louise"], [banff, "Banff"], [richmond, "Eastshore State Park"]];

  function nextImage() {
    setIndex(prev => (prev + 1) % images.length);
  }

    function prevImage() {
    setIndex(prev => prev === 0 ? images.length - 1 : (prev - 1) % images.length);
  }

  return (
    <>
      <Header/>
        <div className="home">
          <section>
            <div className="image-reel">
              <SlArrowLeft className="arrows" onClick={prevImage}/>
              <div className="image-slide">
                <img src={images[index][0]} alt={images[index][1]} width="80%"></img>
                <p className="image-caption">{images[index][1]}</p>
              </div>
              <SlArrowRight className="arrows" onClick={nextImage}/>
            </div>
          </section>

          <section>
            <NavLink className="nav-link" to="/coding">
              coding
            </NavLink>
            <br/>
            <br/>
            <a target='_blank' rel='noopener noreferrer' href='https://discoball.fm/'>discoball.fm</a> - <i>"never listen to an old song."</i> 
            <img src={discoball} alt="screenshot of discoball.fm homepage" width="100%"></img>
          </section>
        </div>
    </>

  );
}

export default Home;