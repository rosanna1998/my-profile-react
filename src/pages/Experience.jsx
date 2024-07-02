import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import certificate1 from '../assets/icons/certificate1.jpg';
import certificate2 from '../assets/icons/certificate2.jpg';

function Experience() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Experience</h1>
              <div className="card-text">
                <h4>
                  <strong>MEMBER</strong>
                </h4>
                <p>
                  <strong>E-commerce Website for Luxe Boutique</strong><br />
                  • Designed and developed an elegant, user-friendly e-commerce site for a high-end fashion boutique. Integrated secure payment gateways and enhanced the shopping experience with intuitive navigation and appealing visuals.
                </p>
                <h4>
                  <strong>MEMBER</strong>
                </h4>
                <p>
                  <strong>Corporate Website for ABC Corporation</strong><br />
                  • Created a professional, visually appealing website for a leading logistics company. Focused on clear communication of services and corporate values, resulting in increased client inquiries and improved online presence.
                </p>
              </div>
              <h1 className="card-title text-center mb-4">Education</h1>
              <div className="card-text">
                <h4>
                  <strong>GRADUATION</strong>
                </h4>
                <p>
                  <strong>CENTRAL PHILIPPINES STATE UNIVERSITY</strong><br />
                  BACHELOR DEGREE IN INFORMATION TECHNOLOGY
                </p>
              </div>
              <h1 className="card-title text-center mb-4">Internship</h1>
              <div className="card-text">
                <h4>
                  <strong>INTERNSHIP</strong>
                </h4>
                <p>
                  <strong>COLLEGE OF COMPUTER STUDIES</strong><br />
                  Assisted in developing and optimizing websites using HTML, CSS, and JavaScript. Implemented responsive design principles to ensure compatibility across devices. Improved website functionality and user experience, leading to increased visitor engagement and client satisfaction.
                </p>
              </div>
              <h1 className="card-title text-center mb-4">Certificate</h1>
              <div className="card">
                <div className="row">
                  <div className="col-6">
                    <div className="image">
                        <img src={certificate1} alt="certificate1" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="image">
                        <img src={certificate2} alt="certificate2" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
