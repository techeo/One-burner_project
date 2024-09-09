import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import colla from '../../assets/images/colla.png'
import Companies from '../../components/companies'
import TeamActivities from '../../components/TeamActivities'
import usersImage from '../../assets/images/Frame 2 1.png'
import timelineImage from '../../assets/images/Rectangle 22.png'
import IntegrationTools from '../../components/IntegrationTools'
import SupportSection from '../../components/SupportSection'
import Rectangle21 from '../../assets/images/Rectangle 21.png'
import Rectangle19 from'../../assets/images/Rectangle 19.png'

const LandingPage = () => {
  return (
    <div className='container'>
      <Header />
        <div className="team-collaboration">
            <div className="collaboration-text">
                <h1>Collaborate with your team and get more done</h1>
                <p>
                Communicate effectively with Oneburner for easy collaboration, teamwork and remote work.
                </p>
                <button className="start-trial">Start Free Trial </button>
            </div>
            <div className="collaboration-avatar">
                <img src={colla} alt="collaboration image" className='cii'/>
            </div>
        </div>
        <Companies />
        <TeamActivities />
        <div className="line"></div>
        <div className="team-features">
      {/* First Feature Section */}
      <div className="feature">
        <img src={usersImage} alt="User Management" className="feature-image" />
        <div className="feature-text">
          <h3>Bring your team up to speed</h3>
          <p>
            Collaborate on projects from start to finish, see information at a glance, add comments, attachments, and more with Oneburner.
          </p>
        </div>
      </div>

      {/* Second Feature Section */}
      <div className="feature reverse">
        <img src={timelineImage} alt="Task Timeline" className="feature-image" />
        <div className="feature-text">
          <h3>Automated task timeline</h3>
          <p>
            View dates, projects, calendars, sprints, and more with reliability.
          </p>
        </div>
      </div>
        </div>
    <IntegrationTools />
    <div className="team-features">
      {/* First Feature Section */}
    <div className="feature">
        <img src={Rectangle21} alt="User Management" className="feature-image" />
        <div className="feature-text">
          <h3>Timeless report generator</h3>
          <p>
          You can generate quick report of activities of all that has to do with the daily running of your business and teams.
          </p>
        </div>
      </div>

      {/* Second Feature Section */}
      <div className="feature reverse">
        <img src={Rectangle19} alt="Task Timeline" className="feature-image" />
        <div className="feature-text">
          <h3>Efficient lead management</h3>
          <p>
          Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.
          </p>
        </div>
      </div>
    </div>
    <SupportSection />

        <Footer />
    </div>
  )
}

export default LandingPage