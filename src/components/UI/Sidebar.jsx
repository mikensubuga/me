import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: 'url(images/mike2.JPG)' }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Mike Nsubuga</a>
            </h1>
            <span className="email">
              <i className="icon-mail"></i> nsubugamike021@gmail.com
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <br/>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>

                <li>
                  <a href="#projects" data-nav-section="projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" data-nav-section="experience">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                <a
                  href="https://github.com/KingMike100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mike-nsubuga/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/mikensbg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-twitter2" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/mikensbg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-telegram" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p>
              <small>
                All Rights Reserved | &copy;2020
                
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
