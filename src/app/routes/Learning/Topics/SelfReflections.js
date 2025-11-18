import Header from '../../../components/Header';
import { useNavigate } from 'react-router';

function SelfReflections() {
    const navigate = useNavigate();

  return (
    <>
        <Header/>
        <div className="self-reflections">
            <button className="back-button" onClick={() => navigate(-1)}>back</button>
            <article><section><p className='indented-text'>Will add something here eventually...</p></section></article>
        </div>
    </>
  );
}

export default SelfReflections;