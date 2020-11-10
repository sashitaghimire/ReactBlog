import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore  an alpine freshwater oligotrophic lake in Nepal'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel to an ancient religious complex atop a hill in the Kathmandu Valley'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Dal Bhat - The Famous Staple Food of Nepal.'
              label='Cuisine'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Recreational and competitive adventure sport of flying paragliders'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Ride a boat on phewa lake'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
