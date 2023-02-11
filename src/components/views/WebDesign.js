import React from 'react'
import video_1 from '../../styles/videos/video-1.mp4'

function WebDesign() {
  return (
    <div className='web-design'>
         <video src={video_1} autoPlay loop muted />
         <h3 style={{color: 'white', padding:25}}>
            <li> We provide in house web-designing services without any hassle and ensures cost effectiveness.</li>
        </h3>
    </div>
  )
}

export default WebDesign