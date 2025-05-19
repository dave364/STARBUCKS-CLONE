import React from 'react';
import './EarningStars.css';

import A1 from '../assets/1A.png';
import A2 from '../assets/1B.png';
import B1 from '../assets/2A.png';
import B2 from '../assets/2B.png';


const EarningStars = () => {
  return (
<section className="earning-stars">
  <div className="conttainer">
    {/* TÍTULO + SUBTÍTULO */}
    <div className="title-box">
      <h2 className="main-title">Cash or card, you earn Stars</h2>
      <p className="subtitle">
        No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
      </p>
    </div>

    <div className="earning-grid">
      <div className="earning-info">
        <p className="earning-rate">
          1<span className="star">★</span> per dollar
        </p>
        <p className="earning-type">Pay as you go</p>
      </div>

      <div className="earning-method-box">
        <div className="earning-flex">
          <div className="earning-image">
            <img className='earnigimg' src={A1} alt=""  />
          </div>
          <div className="earning-description">
            <h3>Scan and pay separately</h3>
            <p>Use cash or credit/debit card at the register.</p>
          </div>
        </div>
      </div>

      <div className="earning-method-box">
        <div className="earning-flex">
          <div className="earning-image">
            <img className='earnigimg' src={A2} alt="" width="112" />
          </div>
          <div className="earning-description">
            <h3>Save payment in the app</h3>
            <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className="earning-grid">
      <div className="earning-info">
        <p className="earning-rate">
          2<span className="star">★</span> per dollar
        </p>
        <p className="earning-type">Add funds in the app</p>
      </div>
      <div className="earning-method-box">
        <div className="earning-flex">
          <div className="earning-image">
            <img className='earnigimg' src={B1}alt="" width="112" />
          </div>
          <div className="earning-description">
            <h3>Preload</h3>
            <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
          </div>
        </div>
      </div>
      <div className="earning-method-box">
        <div className="earning-flex">
          <div className="earning-image">
            <img className='earnigimg' src={B2} alt="" width="112" />
          </div>
          <div className="earning-description">
            <h3>Register your gift card</h3>
            <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default EarningStars;
