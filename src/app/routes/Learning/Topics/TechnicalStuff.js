import Header from '../../../Components/Header';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import MarkdownPost from '../../../Components/MarkdownPost';

function TechnicalStuff() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Technical/manifest.json")
      .then(res => res.json())
      .then(setPosts);
  }, []);
  
  return (
    <>
      <Header/>
      <div className="technical-stuff">
        <button className="back-button" onClick={() => navigate(-1)}>back</button>
        {posts.map(post => (
          <article key={post.slug}>
            <MarkdownPost src={post.src} />
          </article>
        ))}
      </div>
    </>
  );
}

export default TechnicalStuff;
