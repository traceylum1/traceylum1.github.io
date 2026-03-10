import './Home.css';
import { Link } from 'react-router';
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
import { BsArrowRight } from "react-icons/bs";

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
            <div className="homepage-section-link">
              <Link to="coding">coding</Link>&nbsp; <BsArrowRight className="homepage-section-arrow"/>
            </div>

            <br/>
            <div className="project-home">
              <a target='_blank' rel='noopener noreferrer' href='https://discoball.fm/'>discoball.fm</a> - <i>"never listen to an old song."</i> 
            <img src={discoball} alt="screenshot of discoball.fm homepage" width="100%"></img>
            </div>
            
            <div className="project-home">
              <a target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/distributed-cache'>Distributed Cache</a> - <span>a multiple node distributed cache system written in Python</span> 
            </div>
            
            <div className="project-home">
              <a target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/snake-game'>Snake Game in Jack</a> - a snake game written in the Jack programming language for nand2tetris
            </div>
          </section>

          <section>
            <div className="homepage-section-link">
              <Link to="blog">blog</Link>&nbsp; <BsArrowRight className="homepage-section-arrow"/>
            </div>

            <br/>
            <div className="blog-topic-home">
              <Link to="blog/technical">Technical Stuff</Link>&nbsp; - Exploring CS topics
            </div>
            <div className="blog-topic-home">
              <Link to="blog/reflections">Thoughts</Link>&nbsp; - Sharing what's on my mind
            </div>
          </section>

          <section className="personal-section">
            <h3 className="personal-section-title">getting out of the house</h3>
            <div className="image-reel">
              <SlArrowLeft className="arrows" onClick={prevImage}/>
              <div className="image-slide">
                <img src={images[index][0]} alt={images[index][1]} className="reel-image"></img>
                <p className="image-caption">{images[index][1]}</p>
              </div>
              <SlArrowRight className="arrows" onClick={nextImage}/>
            </div>
          </section>
        </div>
    </>

  );
}

export default Home;