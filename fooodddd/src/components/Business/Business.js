import React from 'react';
import './Business.css'


const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}


class Business extends React.Component { 
  render() { 
    return (
        <div className={business.name}>
    <div className="image-container">
      <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    </div>
    <h2>MarginOtto Pizzeria</h2>
    <div className="Business-information">
      <div className={business.address}>
        <p>1010 Paddington Way</p>
        <p>Bordertown</p>
        <p>NY 10101</p>
      </div>
      <div className={business.reviewCount}>
        <h3>ITALIAN</h3>
        <h3 className={business.rating}>4.5 stars</h3>
        <p>90 reviews</p>
      </div>
    </div>
  </div>
    )
  }
}

export default Business;