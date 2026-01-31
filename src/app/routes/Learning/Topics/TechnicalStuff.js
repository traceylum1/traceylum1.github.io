import Header from '../../../components/Header';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function TechnicalStuff() {
  const navigate = useNavigate();

  const [tcpIp, setTcpIp] = useState("");
  const [simple, setSimple] = useState("");

  useEffect(() => {
    fetch("/Technical/tcp-ip.md")
      .then(res => res.text())
      .then(setTcpIp);

    fetch("/Technical/simple-http-java.md")
      .then(res => res.text())
      .then(setSimple);

  }, []);
  
  return (
    <>
        <Header/>
        <div className="technical-stuff">
          <button className="back-button" onClick={() => navigate(-1)}>back</button>
          <article>
            <ReactMarkdown>{simple}</ReactMarkdown>
          </article>

          <article>
            <ReactMarkdown>{tcpIp}</ReactMarkdown>
          </article>
        </div>
    </>
  );
}

export default TechnicalStuff;
