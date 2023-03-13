import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="contact-top">
          <h1>
            Wanna get in touch or <br />
            start a project together?
          </h1>
          <div className="contact-img">
            <img
              src="https://avatars.githubusercontent.com/u/24240227?v=4"
              alt="Chris"
              width={150}
            />
          </div>
        </div>
        <div className="container">
          <div className="contact-bottom">
            <h3>Reach out!</h3>
            <form
              target="_blank"
              action="https://formsubmit.co/613e0c83718961efbcfec76093399e7b"
              method="POST"
            >
              <div className="form-outline mb-4">
                <label className="form-label">Name</label>
                <input type="text" required className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input type="email" required className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Message</label>
                <textarea className="form-control" required rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer-divider">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wuchristian/"><img src="https://i.gyazo.com/558841567b784de372f61f8ddd549fbe.png" width={100} alt="linkedin" /></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/Chris5613"><img src="https://i.gyazo.com/2db65378e24e4795fa1950b1b25c6dc0.png" width={50} alt="icon" /></a> 
          <p>2023 @ Christian Wu</p>
      </footer>
    </>
  );
};

export default Contact;
