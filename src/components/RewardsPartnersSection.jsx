import React from 'react';
import './RewardsPartnersSection.css';

import deltaskymiles from '../assets/delta-skymiles.png';
import bankofamerica from '../assets/bank-of-america.png';
import marriottlogo from '../assets/marriott-logo.png';


const RewardsPartnersSection = () => {
  return (
    <section className="partnership-banner">
      <div className="partnershipcontainer">
        <div className='partnercontainer'>
        <h2 className="title">Keep the Rewards Coming</h2>
        <p className="subtitle">
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.
        </p>

        <div className="partners-grid">
          <div className="partner-card">
            <img src={deltaskymiles} alt="Delta Skymiles" width="190" />
            <p>
              <a href="https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042" target="_blank" rel="noopener noreferrer">
                Link your Delta SkyMiles®
                <svg></svg>
              </a>
              and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.1
            </p>
          </div>

          <div className="partner-card">
            <img src={bankofamerica} alt="Bank of America" width="190" />
            <p>
              <a href="https://promotions.bankofamerica.com/starbucks" target="_blank" rel="noopener noreferrer">
                Link your Bank of America
                <svg></svg>
              </a>
              eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.2
            </p>
          </div>

          <div className="partner-card">
            <img src={marriottlogo} alt="Marriott Bonvoy" width="190" />
            <p>
              <a href="/rewards/partnerships/marriottbonvoy" target="_blank" rel="noopener noreferrer">
                Link your Marriott Bonvoy®
              </a>
              and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.3
            </p>
          </div>
        </div>
        <div className='partnerbotton'>
        <a href="/" className="ovalbutton">Join Starbucks® Rewards</a>
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default RewardsPartnersSection;
