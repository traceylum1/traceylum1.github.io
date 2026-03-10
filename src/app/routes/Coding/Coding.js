import './Coding.css';
import Header from '../../Components/Header';
import discoball from '../../Images/discoball.png';
import snake from '../../Images/snake.png';
import distcache from '../../Images/distributed-cache.png';
import syntaxAnalyzer from '../../Images/syntax-analyzer.png';

function Coding() {
  return (
    <>
      <Header/>
      <div className='coding'>
        <section>
          <a style={{fontSize: '18px', fontWeight: 'bold'}} target='_blank' rel='noopener noreferrer' href='https://discoball.fm/'>discoball.fm</a> - <i>"never listen to an old song."</i> 
          <img src={discoball} alt="screenshot of discoball.fm homepage" width="100%"></img>
          <p>
            discoball.fm is a web app that integrates Spotify's API to allow users to keep track of and search for new music. The app tracks and stores the user's Spotify listening history in a database, and listening history from other platforms (YouTube, Soundcloud, etc.) can be tracked using a third party browser extension called a Web Scrobbler. The Web Scrobbler employs webhooks that allow data to be transferred directly from a streaming platform to the database in real-time.
          </p>
        </section>
        
        <section>
          <a style={{fontSize: '18px', fontWeight: 'bold'}} target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/snake-game'>Snake Game in Jack</a>
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
          <a style={{fontSize: '18px', fontWeight: 'bold'}} target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/distributed-cache'>Distributed Cache (Python)</a>
          <img src={distcache} alt="diagram of PUT request to cache node" width="100%"></img>
          <p>
            Wanting to learn more about one of the most common problems in CS, I decided to code my own distributed cache in order to understand more about the CAP theorem.
          </p>
          <p>
            The theorem states that at any time, a distributed store can guarantee at most 2 of the 3 attributes - consistency, availability, and partition tolerance. High consistency is attained when data is kept up-to-date in every store, high availability means a non-failing node must return a valid response even if it cannot guarantee it is the most recent write, and partition tolerance means that the system will still function even when there are network issues and inter-node communication breaks down. When there are no network issues, both consistency and availability can be achieved. However, in any distributed system, possible network partitions must be accounted for, and in these cases, either consistency or availability can be prioritized, but not both.
          </p>
          <p>
            The design of this distributed cache system is simple without requiring a coordinator. The client should maintain a list of all nodes, and every node knows all other members in the cluster. Each node computes and stores the hash ring for consistent hashing and sharding, and each node is responsible for a designated range of keys within the hash ring as the primary node. Replica nodes store backup copies of the data, and they are the nodes immediately clockwise from the primary node in the hash ring. The client will send requests to the nodes in a round-robin fashion, and it is the node's responsibility to hash the key and forward write requests to the primary node. The primary node will then forward the write requests to its replicas. Read requests can be completed from either primary or replica nodes.
          </p>
          <p>
            This system achieves high consistency when a client writes to a node by forwarding writes to all replicas in parallel and waiting for them to complete. Asynchronously forwarding writes in the background after returning a response to a client (fire-and-forget) would result in total lower latency, but it would make the cache 'eventually consistent.' Worst case, if the primary node goes down before completing replica requests, then it would lead to data loss. This decision was made in order to prioritize high consistency in exchange for the added latency. Lastly, to ensure data freshness, an optional time-to-live module can be added to the store.
          </p>          
        </section>

        <section>
          <a style={{fontSize: '18px', fontWeight: 'bold'}} target='_blank' rel='noopener noreferrer' href='https://github.com/traceylum1/jack-compiler'>Jack Compiler - Part I: Syntax Analyzer</a>
          <img src={syntaxAnalyzer} alt="xml code outputted from Jack syntax analyzer" width="100%"></img>
          <p>
            In nand2tetris2, projects 10 and 11 consist of coding a compiler for a simple Java-like language called Jack. The first part (project 10) tackles the parsing and analysis of the code and then translating it into an .xml file to check for correct code analysis.
          </p>
          <p>
            Writing the tokenizer and compiler for a simple programming language proved to be a lengthy challenge with a great number of smaller hurdles. The concept of a compiler in itself is not necessarily complicated (parse and tokenize source code, compile tokens in recursive manner), but implementing and debugging the compile functions to properly handle all of the different possible paths took up the vast majority of the development time.
          </p>
          <p>
            Jack is a language with minimalistic syntax which handles 3 primitive data types: integers, strings, and booleans. A typical Jack program consists of classes, class level variables, subroutines (constructor, methods, functions), and statements (let, if, while, do, return). It handles expressions to be evaluated, which are composed of a term, and zero or more simple arithmetic operations with another term (expression => term (op term)?). A term can be a variable name (identifier), an integer constant, a string constant, a keyword constant, an array index, a subroutine call, an expression within parentheses, or a unary operator term. Compiling statements, expressions, and terms require recursion.
          </p>
          <p>
            Handling all of the different syntax types is one challenge, but any grouping of tokens in isolation can also have multiple meanings. Correctly parsing a group of tokens based on its relative position to others is the biggest challenge, especially within an arbitrarily deep recursive context. Thorough care must be taken to ensure a group of tokens cannot be miscontrued.
          </p>
          <p>
            A simple example to illustrate the point is: a = x * (y + -z). "a" is a term but not an expression, as it is on the left side of the assignment operator and does not need to be evaluated. On the right side of the assignment operator is an expression. Recall an expression is composed of a term and possibly another operator and term. "x" is a term and we are multiplying it by the other term "(y + -z)". The term "(y + -z)" contains another expression. "y" is the first term of the new expression, "+" is the operator,  and "-z" is the other term. The term "z" is composed of a unary negation operator and an identifier. We know that "-" is a unary operator and not a subtraction operator because if we follow the grammar, "+" is the expected operator and so what follows after it must be a term.
          </p>
        </section>
      </div>
    </>

  );
}

export default Coding;
