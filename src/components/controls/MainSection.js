import React from 'react';
import '../../App.css';
import { Button } from './Button';
import '../../styles/css/MainSection.css';
import { useNavigate } from "react-router-dom";
import video_2 from '../../styles/videos/video-2.mp4'


function MainSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home', {replace: true});
  }

  return (
    <div className='main-container'>
      <video src={video_2} autoPlay loop muted />
      <div className='main-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={handleClick}>
            Ask a query... <i className="far fa-circle-question"></i>
          </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')} >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default MainSection;