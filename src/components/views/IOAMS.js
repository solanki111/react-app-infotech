import React from 'react'
import video_1 from '../../styles/videos/video-1.mp4'

function IOAMS() {
  return (
    <div className='ioams'>
        <video src={video_1} autoPlay loop muted />
        <h3 style={{color: 'white', padding:25}}>
            <li> We provide a complete range of integrated services to maintain mainframe infrastructure, database, storage, network and applications. Our IOAMS service offering combines the best of infrastructure operations and application management services to deliver value to a customer.</li>
        </h3>
    </div>
  )
}

export default IOAMS