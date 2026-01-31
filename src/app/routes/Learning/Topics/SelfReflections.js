import Header from '../../../components/Header';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import MarkdownPost from '../../../components/MarkdownPost';

function SelfReflections() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("/Reflections/manifest.json")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <Header/>
      <div className="self-reflections">
        <button className="back-button" onClick={() => navigate(-1)}>back</button>
        {posts.map(post => (
          <article key={post.date}>
            <MarkdownPost src={post.src} />
          </article>
        ))}
      </div>
    </>
  );
}

export default SelfReflections;