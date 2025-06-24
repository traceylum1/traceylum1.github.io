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
