import React from 'react';

const Experience = () => {
  return (
    <div>
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">highlights</span>
              <h2 className="colorlib-heading animate-box">Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon">
                      <img src="/images/IDILogo.jpg" alt="IDI Logo"></img>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        IT & Software Development Operations{' '}
                        <span>June 2019 - Present</span>
                      </h2>
                      <a>
                        {' '}
                        <span>
                          Infectious Diseases Institute(IDI) - Makerere
                          University
                        </span>
                        <br />
                        <span>
                          African Center of Excellence in Bioinformatics & Data
                          Intensive Sciences(ACE)
                        </span>
                      </a>
                      <br />
                      <br />
                      <p>
                        <ul>
                          <li>
                            Virtual Reality and Augmented Reality Optimization
                            through VR/AR medical applications development.
                          </li>
                          <li>
                            Monitoring, Administering and Troubleshooting
                            Ethernet/IP LAN/WAN environments.
                          </li>
                          <li>
                            Manage the deployment, maintenance and operations of
                            IT Systems
                          </li>
                          <li>System administration and Server management.</li>
                          <li>
                            Manage ACE’s online presence and communication
                            portals.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon">
                      <img src="/images/stats4sd.png" alt="Stats4SD Logo"></img>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        Fullstack Developer Intern{' '}
                        <span>January 2020 - April 2020</span>
                      </h2>
                      <a>
                        {' '}
                        <span>
                          Statistics for Sustainable Development(Stats4SD) -
                          Reading, UK
                        </span>
                      </a>
                      <br />
                      <br />
                      <p>
                        <ul>
                          <li>
                            Led the development of Resources Report application
                            in VueJs supporting the analytics of the Stats4SD
                            site
                          </li>
                          <li>
                            Led the development of Research Management System in
                            Laravel, supporting Stats4SD's partners worldwide to
                            manage research collections.
                          </li>
                          <li>
                            Deployed several apps towards the cloud(Google Cloud
                            Platform)
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon">
                      <img src="/images/MAKLogo.jpg" alt="MAK Logo"></img>{' '}
                    </div>
                    <div className="timeline-label">
                      <h2>
                        IT Specialist(Volunteer){' '}
                        <span>June 2018 - May 2019</span>
                      </h2>
                      <a>
                        {' '}
                        <span>
                          College of Computing & Informational Sciences(COCIS) -
                          Makerere University
                        </span>
                      </a>
                      <br />
                      <br />
                      <p>
                        <ul>
                          <li>
                            Provided ICT support services to students and
                            instructors at the College of Computing(COCIS).
                          </li>
                          <li>
                            Managed administraion of the College Linux Servers.
                          </li>
                          <li>Network administration (CISCO)</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon">
                      <img src="/images/MAKLogo.jpg" alt="MAK Logo"></img>{' '}
                    </div>
                    <div className="timeline-label">
                      <h2>
                        Programming Tutorial Assistant (Volunteer){' '}
                        <span>January 2019 - January 2020</span>
                      </h2>
                      <a>
                        {' '}
                        <span>
                          College of Computing & Informational Sciences(COCIS) -
                          Makerere University
                        </span>
                      </a>
                      <br />
                      <br />
                      <p>
                        <ul>
                          <li>
                            Assisted undergraduate students with problems in C
                            and Java programming courses.
                          </li>
                          <li>
                            Assisted the Senior lecturer in delivering C and
                            Java programming practical classes to undergraduate
                            students.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
