import React from 'react';
import '../../styles/css/Cards.css';
import CardItem from './CardItem';
// import img_1 from '../../styles/images/img-9.jpg'
// import img_2 from '../../styles/images/img-2.jpg'
// import img_3 from '../../styles/images/img-3.jpg'
// import img_4 from '../../styles/images/img-4.jpg'
// import img_5 from '../../styles/images/img-8.jpg'
import main_1 from '../../styles/images/mainframe-1.jpeg'
import main_2 from '../../styles/images/mainframe-2.jpeg'
import dm from '../../styles/images/Digital-Market.jpeg'
import wd from '../../styles/images/web-design.jpeg'
import ux from '../../styles/images/UX.jpeg'
import video_1 from '../../styles/videos/video-1.mp4'

function Cards() {
  return (
    <div className='cards'>
      <video src={video_1} autoPlay loop muted />
      <h1>Check out our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={main_1}
              text=''
              label='Integrated Operations & Application Management Services (IOAMS)'
              path='/ioams'/>
            <CardItem
              src={main_2}
              text=''
              label='Mainframe Application Consulting Services'
              path='/mainframe'/>
          {/* </ul>
          <ul className='cards__items'> */}
            <CardItem
              src={dm}
              text=''
              label='Digital Marketing Services'
              path='/digital-marketing'/>
            <CardItem
              src={wd}
              text=''
              label='Web Design/UI/UX Consulting and Services'
              path='/web-design'/>
            <CardItem
              src={ux}
              text=''
              label='App Development/Design Services'
              path='/app-dev'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;