import './Projects.css';
import Header from '../../Components/Header';

function Projects() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }

  return (
    <>
      <Header/>
      <div className="Projects">
          <span className='link' onClick={onClickUrl('https://discoball.fm/')}>discoball.fm</span> - "never listen to an old song."
      </div>
    </>

  );
}

export default Projects;
