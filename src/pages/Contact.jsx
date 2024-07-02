import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">Get in Touch</h2>
              <p className="card-text">Let's talk. Feel free to send me an email or schedule a free consultation with me.</p>
              <h3 className="mt-4">quingcorosanna98@gmail.com</h3>
              <p className="mt-2">
                <a href="mailto:quingcorosanna98@gmail.com" className="btn btn-primary">Send Email</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
