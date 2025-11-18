import { Link } from "react-router";
import './Learning.css';
import Header from '../../components/Header';

function Learning() {
  return (
    <>
      <Header/>
      <div className="Learning">
        <p><Link to="technical">Technical Stuff</Link> - Exploring CS topics</p>
        <p><Link to="self-reflections">Self-Reflections</Link> - Some thoughts on my learning journey</p>
      </div>
    </>
  );
}

export default Learning;
