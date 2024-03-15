import React from 'react';
import './Steps.css'; 

// Importa las imágenes que necesitas para cada sección
import step1Image from '../assets/step1.jpg';
import step2Image from '../assets/step2.jpg';
import step3Image from '../assets/step3.jpg';

const Steps= () => {
  return ( 
  <div className='Steps-container'>
    <div className="top-text">
        <h2>Getting started is easy</h2>
        <p>Earn Stars and get rewarded in a few easy steps.</p>
      </div>
    <div className="container">
      <div className="section">
        <img src={step1Image}  alt="Step 1" />
        <h3>Create an account</h3>
        <p>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
      </div>
      <div className="section">
        <img src={step2Image} alt="Step 2" />
        <h3>Order and pay how you’d like</h3>
        <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.</p>
      </div>
      <div className="section">
        <img src={step3Image} alt="Step 3" />
        <h3>Earn Stars, get Rewards</h3>
        <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
      </div>
    </div>
    </div>
  );
}

export default Steps;
