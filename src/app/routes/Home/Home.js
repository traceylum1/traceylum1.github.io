import './Home.css';
import Header from '../../Components/Header';
import sunset from '../../Images/sunset.jpg';

function Home() {
  return (
    <>
      <Header/>
        <div className="Home">
          <article>
            <h3>
              Hello, welcome to my website!
            </h3>
            <p>
              This is where I document my CS learning journey and other interests/activities.
            </p>
            <p>
              Thanks for visiting - here is a pic of a sunset by the water :)
            </p>
          </article>
          <img src={sunset} alt="a chill sunset" width="500"></img>
        </div>
    </>

  );
}

export default Home;