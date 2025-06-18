import { Link } from "react-router";
import './Learning.css';
import Header from '../../components/Header';

function Learning() {
  return (
    <>
      <Header/>
      <div className="Learning">
      <p><Link to="self-reflections">Self-Reflections</Link> - Some introspective thoughts on my learning journey</p>
      <p><Link to="technical">Technical Stuff</Link> - Diving into CS topics</p>
      </div>
    </>
  );
}

export default Learning;
