import './Coding.css';
import Header from '../../Components/Header';
import discoball from '../../Images/discoball.png';

function Projects() {
  return (
    <>
      <Header/>
      <div className='projects'>
          <a target='_blank' rel='noopener noreferrer' href='https://discoball.fm/'>discoball.fm</a> - <i>"never listen to an old song."</i> 
          <img src={discoball} alt="screenshot of discoball.fm homepage" width="700"></img>
          <p>This is a web app that integrates Spotify's API to allow users to keep track of and search for new music. The app tracks and stores the user's Spotify listening history in a database, and listening history from other platforms (YouTube, Soundcloud, etc.) can be tracked using a third party browser extension called a Web Scrobbler. The Web Scrobbler employs webhooks that allow data to be transferred directly from a streaming platform to the database in real-time.</p>
      </div>
    </>

  );
}

export default Projects;
