import { Link } from "react-router";
import './Blog.css';
import Header from '../../Components/Header';
import { SlArrowRight } from "react-icons/sl";

function Blog() {
  return (
    <>
      <Header/>
      <div className="blog">
        <Link className="blog-section" to="technical"><b>Technical Stuff</b>&nbsp; - Exploring CS topics<SlArrowRight className="arrow"/></Link>
        <Link className="blog-section" to="reflections"><b>Thoughts</b>&nbsp; - Sharing what's on my mind<SlArrowRight className="arrow"/></Link>
        <Link className="blog-section" to="reading"><b>Reading</b>&nbsp; - Books I've read<SlArrowRight className="arrow"/></Link>
      </div>
    </>
  );
}

export default Blog;
