import React from 'react'
import video_1 from '../../styles/videos/video-1.mp4'

function Mainframe() {
  return (
    <div className='mainframe'>
        <video src={video_1} autoPlay loop muted />
        <h3 style={{color: 'white', padding:25}}>
            <li> We provide a structured approach to retire mainframe applications in an orderly manner, so as to provide a logical conclusion to a migration, modernization or re-hosting project. Our solution is based on the industry-proven methodology which enables customers to complete decommissioning of their obsolete systems without any hassle and ensures cost effectiveness.</li>
        </h3>
        <h3 style={{color: 'white', padding:25}}>
            <li> We have around 15+ years of experience in developing, maintaining and supporting critical applications running on mainframes for financial institutions, insurance companies, aircraft manufacturers, travel, transportation & logistics providers and organizations in retail, life sciences, health care, media & entertainment domains.</li>  
        </h3>
        <h3 style={{color: 'white', padding:25}}>
            <li> We provide consulting services to assess portfolio of legacy applications and advice customers on migration, modernization, performance management, zCloud implementation, mainframe re-hosting, SOA implementation and more. We also evaluate products/tools on the mainframe.</li>
        </h3>
        <h3 style={{color: 'white', padding:25}}>
            <li> We offer migration services that can lower the costs and risks of migrating legacy applications, languages, databases and platforms. We utilize a proprietary Migration Factory approach to ensure that migration projects are delivered on time, budget and cost.</li>
        </h3>
    </div>
  )
}

export default Mainframe