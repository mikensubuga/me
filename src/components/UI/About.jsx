import React from 'react';
const About = () => {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="about">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/floppy-low.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>
                          Hi! <br />
                          I'm Mike
                        </h1>

                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/KingMike100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-github" />
                          </a>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://linkedin.com/in/mike-nsubuga"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-linkedin2" />
                          </a>
                          <a
                            className="btn btn-primary btn-learn"
                            href="#contact"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-mail5" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
