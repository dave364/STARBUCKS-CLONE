import React from 'react';
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="heroimage">
     <div class="banner">
       <h1>Starbucks<sup>®</sup> Rewards</h1>
      </div>
      <div className="herotext">
        <h2>FREE COFFEE <br /> IS A TAP AWAY</h2>
        <div>
          <p>Join now to start earning Rewards.</p>
        </div>
        <a href="/" className="oval-button join-now-reg">Join now</a>
        <div className='text-x1'>
        Or <a href='/'>join in the app</a> for the best experience
      </div>
      </div>
    </div>
  );
  
}

export default Rewards;



