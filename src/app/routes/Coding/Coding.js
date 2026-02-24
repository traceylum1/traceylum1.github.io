import './Coding.css';
import Header from '../../Components/Header';
import discoball from '../../Images/discoball.png';
import snake from '../../Images/snake.png';

function Coding() {
  return (
    <>
      <Header/>
      <div className='coding'>
        <section>
          <a target='_blank' rel='noopener noreferrer' href='https://discoball.fm/'>discoball.fm</a> - <i>"never listen to an old song."</i> 
          <img src={discoball} alt="screenshot of discoball.fm homepage" width="100%"></img>
          <p>
            discoball.fm is a web app that integrates Spotify's API to allow users to keep track of and search for new music. The app tracks and stores the user's Spotify listening history in a database, and listening history from other platforms (YouTube, Soundcloud, etc.) can be tracked using a third party browser extension called a Web Scrobbler. The Web Scrobbler employs webhooks that allow data to be transferred directly from a streaming platform to the database in real-time.
          </p>
        </section>
        
        <section>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/snake-game'>Snake Game in Jack</a>
          <img src={snake} alt="screenshot of snake game" width="100%"></img>
          <p>
            A snake game written in the Jack programming language for nand2tetris. The snake's body is composed of an array of x and y coordinates (even indexes are x coordinates, odd indexes are y coordinates) which point to the top left of each square segment of the body. A new array is created to update the old array values every time the snake moves, and every movement traverses the distance of one body segment. The snake's direction is stored as an integer value between 1-4 (1-up, 2-down, 3-left, 4-right), and the new head position is determined by the current direction. The rest of the array values are shifted down two indexes.
          </p>
          <p>
            One notable challenge of programming a snake game in Jack was positioning the new food target in a random location every time it was eaten. In Jack, there is no standard library method to output a random number. Within a computer program, there is no such thing as a truly random number. Usually what is output from a built-in function is a "pseudo-random" number generated from a starting "seed," and some math tricks are then used to make the result look random, with possibly an added environmental element to increase unpredictability. The environmental element is sometimes the current time or some user actions which always change. In Jack, the os.time method did not return a value, so that method was not available.
          </p>
          <p>
            After some thinking, I realized that the most unpredictable element in the snake game would have to be the position of the snake itself. The head wouldn't work because it's position was right on top of the previous food target each time a new one needed to be placed, so I used the x and y coordinates of the tail. The tail's position was determined by all the previous actions made by the user, and that was sufficently random for the game's purposes.
          </p>
        </section>

        <section>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/distributed-cache'>Distributed Cache (Python)</a>
          <p>
            Wanting to learn more about one of the most common problems in CS, I decided to code my own distributed cache in order to understand more about the CAP theorem.
          </p>
          <p>
            The theorem states that at a distributed store can guarantee at most 2 of the 3 attributes - consistency, availability, and partition tolerance. Consistency is attained when data is kept up-to-date in every store. Availability 
          </p>
        </section>
      </div>
    </>

  );
}

export default Coding;
