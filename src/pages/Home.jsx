import React from 'react';
import profileImage from '../assets/icons/profile.jpg';

function Home() {
  return (
    <div className="home">
        <div className="row">
            <div className="col-6">
                <div className="intro">
                    <h1>Your Partner in Branding and Web Design Solutions</h1>
                    <p>A 26 -year–old  <strong>web designer</strong> based in Negros Occidental, Philippines </p>
                    <div className="buttons justify-content-center">
                        <a href="https://discord.com" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-discord"></i> Join my Discord Community
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="image">
                    <img src={profileImage} alt="Rosanna" />
                </div>
                <p>I also make content on <strong>Youtube</strong>, and <strong>Medium</strong>.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
