import React from 'react';
import './Hero.css';
import IntegrationTools from '../IntegrationTools';
import Adeola from '../../assets/images/Adeola.png';
import Lookman from '../../assets/images/Lookman.png';
import Kemi from '../../assets/images/kemi.png';
import Companies from '../companies';
import CheckCircle from '../../assets/images/checkcircle.png'
import medal from '../../assets/images/medal.png'
import africa from '../../assets/images/africa 1.png'


const Hero = () => {
  return (
      <div className="container">
        <div className='yuuu'>
        <div className="message right">
              <img src={Adeola} alt="Adeola" className="user-img" />
            </div>
            <div className="message left">
              <img src={Lookman} alt="Lookman" className="user-img" />
            </div>
        <div className="content-wrapper">
          <h4 className="main-heading">
            Modern solution built for your <br/> enterprise growth
          </h4>
          <p className="description">
            Centralize your team in a secure, flexible and managed platform.
          </p>
            <a className="btn-primary" href="#">
              Request a demo   {'>'}
            </a>
        </div>
        </div>
        <Companies />
        <div className="ent-wrap">
          <div className="enterprise-cont">
              <h1>How Oneburner helps enterprises grow</h1>
              <div className="ent-col">
                <p className='ent-item'>
                  Oneburner software solution helpa your business by creating an enabling environment
                  for easy communication and feedback in real time. Oneburner brings all your user
                  and teams in a single place with 99.99% SLA and data security.
                </p>
                <ul className='ent-item'>
                  <li>
                    <span ><img src={CheckCircle} className="checkmark" alt="checkcircle" /></span> Data protection and control
                  </li>
                  <li>
                    <span ><img src={CheckCircle} className="checkmark" alt="checkcircle" /></span> Reporting and analytics
                  </li>
                  <li>
                    <span ><img src={CheckCircle} className="checkmark" alt="checkcircle" /></span> Use single sign-on and multi-factor authentication to secure accounts
                  </li>
                  <li>
                    <span ><img src={CheckCircle} className="checkmark" alt="checkcircle" /></span> Enterprise integration with other tools
                  </li>
                </ul>
              </div>
          </div>
          <div className="best-col">
            <img src={medal} alt="" className="best-img" />
            <div className='bc-text'>
            <h1>Best Collaboration Software</h1>
            <p>Africa tech coalition award 2020</p>
            </div>
          </div>
        </div>
        <IntegrationTools />
        <div className="region-container">
          <h1>Our Regional Presence</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br/> been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
          <img src={africa} alt="map of africa" className="map" />
        </div>
        <div className="product-container">
          <p>Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot <br/>easier. It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for <br/>your help and is worth much more than we paid. We were treated like royalty.</p>
        </div>
        <div class="image-container">
          <img src={Kemi} alt="Centered Image" class="center-image" />
        </div>
        <div className="contact-wrapper">
          <h3>Want to learn more on how we can <br/>impact your enterprise?</h3>
          <a className="btn-primary btn-sec" href="#">
              Contact sales   {'>'}
            </a>
        </div>
      </div>

  )
}

export default Hero