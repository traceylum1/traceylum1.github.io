import { Link } from "react-router";
import './Blog.css';
import Header from '../../Components/Header';
import { SlArrowRight } from "react-icons/sl";

function Blog() {
  return (
    <>
      <Header/>
      <div className="blog">
        <Link className="blog-section" to="technical"><b>Technical Stuff </b>Exploring CS topics<SlArrowRight className="arrow"/></Link>
        <Link className="blog-section" to="self-reflections"><b>Thoughts </b>Some personal reflections on various topics<SlArrowRight className="arrow"/></Link>
      </div>
    </>
  );
}

export default Blog;
