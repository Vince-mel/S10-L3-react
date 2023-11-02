import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row text-center mt-5">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col col-12 text-left mb-2">
              <i className="fa fa-facebook footer-icon"></i>
              <i className="fa fa-instagram footer-icon"></i>
              <i className="fa fa-twitter footer-icon"></i>
              <i className="fa fa-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <button>Audio and Subtitles</button>
                  </p>
                  <p>
                    <button>Media Center</button>
                  </p>
                  <p>
                    <button>Privacy</button>
                  </p>
                  <p>
                    <button>Contact us</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <button>Audio Description</button>
                  </p>
                  <p>
                    <button>Investor Relations</button>
                  </p>
                  <p>
                    <button>Legal Notices</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <button>Help Center</button>
                  </p>
                  <p>
                    <button>Jobs</button>
                  </p>
                  <p>
                    <button>Cookie Preferences</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <button>Gift Cards</button>
                  </p>
                  <p>
                    <button>Terms of Use</button>
                  </p>
                  <p>
                    <button>Corporate Information</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2">
              <button
                type="button"
                className="btn btn-sm service-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
