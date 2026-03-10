import './About.css';
import Header from '../../Components/Header';
import profile from '../../Images/profile.jpeg'
import { SiGithub, SiLinkedin, SiMailboxdotorg } from "react-icons/si";

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
          <div className="about-link">
          <SiGithub/>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1'>github.com/traceylum1</a>
          </div>
          <div className="about-link">
            <SiLinkedin/>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/traceylum/'>linkedin.com/in/traceylum</a>
          </div>
          <div className="about-link">
            <SiMailboxdotorg/>
            <a target='_blank' rel='noopener noreferrer' href='mailto:traceylum@gmail.com'>traceylum@gmail.com</a>
          </div>
        </article>
      </div>
    </>

  );
}

export default About;
