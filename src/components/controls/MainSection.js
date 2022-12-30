import React from 'react';
import '../../App.css';
import { Button } from './Button';
import '../../styles/css/MainSection.css';
import video_2 from '../../styles/videos/video-2.mp4'

function MainSection() {
  return (
    <div className='main-container'>
      <video src={video_2} autoPlay loop muted />
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' >
          Ask a query...
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