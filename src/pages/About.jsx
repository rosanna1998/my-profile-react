import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import techImage from '../assets/icons/tech-design.png';

function About() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">About Me</h1>
              <p className="card-text">
                Welcome to <strong>ROSANNA</strong>!
              </p>
              <p className="card-text">
                I am a web designer based in the Philippines, blending business strategy with creative design to craft unique, user-friendly websites. With a background in business studies and a passion for storytelling through design, I specialize in branding and web development. My experience with diverse clients has sharpened my skills in the competitive market of the Philippines.
              </p>
              <p className="card-text text-center">
                <strong>Let's create something amazing together!</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className='text-secondary'> <strong>TECHNOLOGY DESIGN</strong></h2><br></br>
              <div className="image">
                    <img src={techImage} className='w-100 pb-3' alt="tech" />
                </div>
              <h2 className='text-secondary'> <strong>RECOMMENDATIONS</strong></h2><br></br>
              <p className="card-text">
                <h4><i className="fa fa-user"></i> <strong className='text-primary'>John Smith, CEO of ABC Corporation</strong></h4>
                ROSANNA transformed our online presence with a sleek, user-friendly website. Their ability to understand our brand and translate it into a compelling digital experience was impressive. Highly recommended!"
              </p>

              <p className="card-text">
                <h4><i className="fa fa-user"></i> <strong className='text-primary'>Sarah Johnson, Marketing Manager at XYZ Ltd.</strong></h4>
                "Working with ROSANNA was a game-changer for our company. Their expertise in web design and branding helped us stand out in a crowded market. The website they designed not only looks fantastic but also performs exceptionally well."
              </p>

              <p className="card-text">
                <h4><i className="fa fa-user"></i> <strong className='text-primary'>Ahmed Al-Fahad, Founder of Tech Innovators</strong></h4>
                ROSANNA has a keen eye for design and a strategic approach to web development. They delivered a website that truly represents our brand and engages our audience. Their professionalism and creativity are unmatched."
              </p>
              
              <p className="card-text">
                <h4><i className="fa fa-user"></i> <strong className='text-primary'>Fatima Al-Salem, Owner of Boutique Elegance</strong></h4>
                "I am thrilled with the website ROSANNA designed for my boutique. It beautifully showcases our products and has significantly boosted our online sales. Their attention to detail and dedication to client satisfaction are remarkable."  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
