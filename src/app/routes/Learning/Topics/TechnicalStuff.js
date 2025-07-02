import Header from '../../../components/Header';
import { useNavigate } from 'react-router';

function TechnicalStuff() {
  const navigate = useNavigate();

  return (
    <>
        <Header/>
        <div className="technical-stuff">
          <button className="back-button" onClick={() => navigate(-1)}>back</button>
          <article>
              <h2>7-1-2025</h2>
              <section>
                <p>
                  HTTP Server
                </p>
                <p>
                  A quick summary of how to write up a simple HTTP Server in Java:
                </p>
                <p className="indented-text">
                  1. Make a new instance of a ServerSocket and pass in desired port number.
                </p>
                <p className="indented-text">
                  2. Create a while loop that iterates as long as the server is running.
                </p>
                <p className="indented-text">
                  3. Call the ServerSocket method accept(), which is a blocking method that waits for a client to connect, and then returns a Socket object.
                </p>
                <p className="indented-text">
                  4. Read the HTTP request from the Socket object using InputStreamReader, which converts bytes streams to character streams.
                </p>
                <p className="indented-text">
                  5. Prepare an HTTP response.
                </p>
                <p className="indented-text">
                  6. Send HTTP response to the client by writing to the Socket object's output stream.
                </p>
                <p className="indented-text">
                  7. Close the socket connection.
                </p>
              </section>
            </article>

            <article>
              <h2>6-24-2025</h2>
              <section>
                <p>
                  TCP/IP
                </p>
                <p>
                  Creating a Redis clone has been very useful in understanding networking and how messages are sent. The layers involved in transmission of data include (from low level to higher) the IP layer, TCP/UDP layer, and application protocol layer. 
                </p>
                <p>
                  The IP layer contains data as discrete units of bytes called IP packets. The TCP/UDP layer establishes the source and destination of the messages. UDP only establishes the IP and port, while TCP has higher functionality, ensuring retransmission and reordering of data as necessary. UDP is useful for sending data when the order of which it is received is not extremely important (ie. streaming a video), whereas TCP is useful for maintaining a live and reliable connection (ie. online multiplayer games).
                </p>
              </section>
            </article>
        </div>
    </>
  );
}

export default TechnicalStuff;
