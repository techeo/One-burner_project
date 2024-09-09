import React from 'react';
import './IntegrationTools.css';

// Importing the images
import slackIcon from '../assets/images/slack.png';
import gmailIcon from '../assets/images/gmail.png';
import linkedinIcon from '../assets/images/linkedin.png';
import mailchimpIcon from '../assets/images/mailchimp.png';
import dropboxIcon from '../assets/images/dropbox.png';
import facebookIcon from '../assets/images/facebook.png';
import onenoteIcon from '../assets/images/onenote.png';
import messengerIcon from '../assets/images/messenger.png';
import whatsappIcon from '../assets/images/whatsapp.png';
import googleCalendarIcon from '../assets/images/sendgrid.png';
import githubIcon from '../assets/images/github.png';
import outlookIcon from '../assets/images/outlook.png';
import boxIcon from '../assets/images/box.png';
import microsoftTeamsIcon from '../assets/images/teams.png';
import sharepointIcon from '../assets/images/sharepoint.png';
import youtubeIcon from '../assets/images/youtube.png';
import zapierIcon from '../assets/images/zeplin.png';
import excelIcon from '../assets/images/excel.png';
import powerpointIcon from '../assets/images/powerpoint.png';
import accessIcon from '../assets/images/access.png';
import wordpressIcon from '../assets/images/wordpress.png';

const IntegrationTools = () => {
  const tools = [
    { name: 'Slack', icon: slackIcon },
    { name: 'Gmail', icon: gmailIcon },
    { name: 'LinkedIn', icon: linkedinIcon },
    { name: 'Mailchimp', icon: mailchimpIcon },
    { name: 'Dropbox', icon: dropboxIcon },
    { name: 'Facebook', icon: facebookIcon },
    { name: 'OneNote', icon: onenoteIcon },
    { name: 'Messenger', icon: messengerIcon },
    { name: 'WhatsApp', icon: whatsappIcon },
    { name: 'Google Calendar', icon: googleCalendarIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Outlook', icon: outlookIcon },
    { name: 'Box', icon: boxIcon },
    { name: 'OneNote', icon: onenoteIcon },
    { name: 'Microsoft Teams', icon: microsoftTeamsIcon },
    { name: 'SharePoint', icon: sharepointIcon },
    { name: 'YouTube', icon: youtubeIcon },
    { name: 'Zapier', icon: zapierIcon },
    { name: 'Excel', icon: excelIcon },
    { name: 'PowerPoint', icon: powerpointIcon },
    { name: 'Access', icon: accessIcon },
    { name: 'WordPress', icon: wordpressIcon },
  ];

  return (
    <div className="integration-tools">
      <h3>Integrate with your favourite tools <br/> easily in one click</h3>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-item" key={index}>
            <img src={tool.icon} alt={tool.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationTools;
