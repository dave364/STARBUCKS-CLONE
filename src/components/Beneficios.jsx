import React from 'react';
import './Beneficios.css';

// Importa las imágenes
import funFreebies from '../assets/1-fun-freebies.jpg';
import orderAndPayAhead from '../assets/2-order-and-pay-ahead.jpg';
import getToFreeFaster from '../assets/3-get-to-free-faster.jpg';

const Beneficios = () => {
  return (
    <div className='beneficios-container'>
      <div className="top-text">
        <h2>Endless Extras</h2>
        <p>
          Joining Starbucks® Rewards means unlocking access to benefits like 
          quick and easy ordering, tasty Rewards and—yes, free coffee.
        </p>
      </div>
      <div className="benefits-grid">
        <div className="benefit">
          <img src={funFreebies} alt="Fun Freebies" />
          <h3>Fun freebies</h3>
          <p>Not only can you earn free food, drinks and more, look forward to a birthday treat on us.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="benefit">
          <img src={orderAndPayAhead} alt="Order & Pay Ahead" />
          <h3>Order & pay ahead</h3>
          <p>Master the art of ordering ahead with saved favorites and payment methods.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="benefit">
          <img src={getToFreeFaster} alt="Get to Free Faster" />
          <h3>Get to free faster</h3>
          <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
