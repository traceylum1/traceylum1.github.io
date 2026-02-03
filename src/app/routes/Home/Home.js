import './Home.css';
import { useState } from 'react';
import Header from '../../Components/Header';
import sunset from '../../Images/marina-sunset.jpg';
import sunrise from '../../Images/belize-sunrise.jpeg';
import beach from '../../Images/ocean-beach.jpeg';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


function Home() {
  const [ index, setIndex ] = useState(0);
  const images = [ [sunset, "Richmond Marina"], [sunrise, "San Pedro"], [beach, "Ocean Beach"] ];

  function nextImage() {
    setIndex(prev => (prev + 1) % images.length);
  }

    function prevImage() {
    setIndex(prev => prev === 0 ? images.length - 1 : (prev - 1) % images.length);
  }

  return (
    <>
      <Header/>
        <div className="Home">
          <article>
            <h3>
              Hello, welcome to my website!
            </h3>
            <p>
              Thanks for visiting - here are some images to peruse :)
            </p>
          </article>
          <div className="image-reel">
            <SlArrowLeft onClick={prevImage}/>
            <div className="image-slide">
              <img src={images[index][0]} alt={images[index][1]} width="500"></img>
              <p className="image-caption">{images[index][1]}</p>
            </div>
            <SlArrowRight onClick={nextImage}/>
          </div>

        </div>
    </>

  );
}

export default Home;