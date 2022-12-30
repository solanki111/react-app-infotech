import React from 'react';
import '../../styles/css/Cards.css';
import CardItem from './CardItem';
import img_1 from '../../styles/images/img-9.jpg'
import img_2 from '../../styles/images/img-2.jpg'
import img_3 from '../../styles/images/img-3.jpg'
import img_4 from '../../styles/images/img-4.jpg'
import img_5 from '../../styles/images/img-8.jpg'
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
              src={img_1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'/>
            <CardItem
              src={img_2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'/>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img_3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'/>
            <CardItem
              src={img_4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'/>
            <CardItem
              src={img_5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;