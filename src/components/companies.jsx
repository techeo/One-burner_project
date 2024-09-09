import React from 'react';
import './Companies.css';
import paystack from '../assets/images/paystack.png';
import egyptair from '../assets/images/egyptair.png';
import dangote from '../assets/images/dangote.png';
import stanbic from '../assets/images/stanbic.png';
import mtn from '../assets/images/mtn.png';
import gtbank from '../assets/images/gtbank.png';
import skooloo from '../assets/images/skooloo.png';

const Companies = () => {
  return (
    <div className="companies">
      <p>Over 500+ companies bond teams together with Oneburner</p>
      <div className="company-logos">
        <img src={paystack} alt="Paystack" />
        <img src={egyptair} alt="Egyptair" />
        <img src={dangote} alt="Dangote" />
        <img src={stanbic} alt="Stanbic" />
        <img src={mtn} alt="MTN" />
        <img src={gtbank} alt="GTBank" />
        <img src={skooloo} alt="Skooloo" />
      </div>
    </div>
  );
};

export default Companies;
