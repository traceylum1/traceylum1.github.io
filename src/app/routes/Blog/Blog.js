import { Link } from "react-router";
import './Blog.css';
import Header from '../../Components/Header';

function Blog() {
  return (
    <>
      <Header/>
      <div className="blog">
        <p><Link to="technical">Technical Stuff</Link> - Exploring CS topics</p>
        <p><Link to="self-reflections">Self-Reflections</Link> - Some thoughts on my learning journey</p>
      </div>
    </>
  );
}

export default Blog;
