import React, { useState } from 'react';
import './TeamActivities.css';
import meetingImage from '../assets/images/meetingImage.png'; // Assuming this is the image path

const TeamActivities = () => {
  const [activeTab, setActiveTab] = useState('CRM & Sales');

  const tabs = [
    'CRM & Sales',
    'Human Resources',
    'Marketing',
    'Remote Work',
    'Project Management',
    'Social Media',
  ];

  return (
    <div className="team-activities">
      <div className="tabs">
        {tabs.map((tab) => (
          <p
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>
      <div className="content">
        <div className="text-section">
          <h2>Manage team activities all in one place</h2>
          <p>
            Keep your team organized and informed with activities that are up to date.
          </p>
        </div>
        <div className="image-section">
          <img src={meetingImage} alt="Team Meeting" />
        </div>
      </div>
    </div>
  );
};

export default TeamActivities;
