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
              <h2>Simple HTTP Server in Java</h2>
              <section>
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
              <h2>TCP/IP</h2>
              <section>
                <p>
                  The layers involved in transmission of data include (from low level to higher) the IP layer, TCP/UDP layer, and application protocol layer. 
                </p>
                <p>
                  The IP layer contains data as discrete units of bytes called IP packets. The TCP/UDP layer establishes the source and destination of the messages. UDP only establishes the IP and port, while TCP has higher functionality, ensuring retransmission and reordering of data as necessary. UDP is useful for when the timing of the data sent is important and can tolerate some loss (ie. streaming video/audio or online multiplayer games), whereas TCP is useful for sending all data in an ordered and reliable manner (ie. downloading a program).
                </p>
              </section>
            </article>
        </div>
    </>
  );
}

export default TechnicalStuff;
