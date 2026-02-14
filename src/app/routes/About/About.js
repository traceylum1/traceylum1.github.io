import './About.css';
import Header from '../../Components/Header';
import profile from '../../Images/profile.jpeg'


function About() {
  return (
    <>
      <Header/>
      <div className="about">
        <img className="profile-pic" src={profile} alt="me in front of some ivy" width="300"></img>
        <article>
          <p>
            Software engineer. Born and raised in the East Bay. Learning to learn deeply and appreciate the finer details. Maybe do some good in the world along the way.
          </p>
        </article>
        <article>
          <p>
            <b>github: </b>
            <a href='https://github.com/traceylum1'>github.com/traceylum1</a>
          </p>

          <p>
            <b>email: </b>
              <a href='mailto:traceylum@gmail.com'>traceylum@gmail.com</a>
            </p>
        </article>
      </div>
    </>

  );
}

export default About;
