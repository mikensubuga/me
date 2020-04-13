import React, { Component } from 'react';
import About from '../UI/About';
import Projects from '../UI/Projects';
import Timeline from '../UI/Experience';
import Sidebar from '../UI/Sidebar';
import Skills from '../UI/Skills';

class Layout extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'RMS System',
        stack: 'Laravel',
        description:
          'A web app to help Stats4SD partners manage & share resources from their Research Studies',
        imageURL: 'images/img-1.jpg',
        projectURL: 'https://github.com/stats4sd/rmsystem'
      },
      {
        id: 2,
        title: 'Stats4SD Resources Report',
        stack: 'VueJs, GCP, Docker',
        description:
          'A web app to help determine the usage of collections & resources on the Stats4SD website',
        imageURL: 'images/img-2.jpg',
        projectURL: 'https://stats4sd-resources-report.netlify.com/'
      },
      {
        id: 3,
        title: 'ACE Appointment Scheduler',
        stack: 'ReactJs, NodeJs',
        description:
          'A web app to solve the problem of appointments scheduling of the different facilities at the ACE',
        imageURL: 'images/img-3.jpg',
        projectURL: 'https://aceuganda.github.io/ace-appointment-scheduler/'
      },
      {
        id: 4,
        title: 'Burger App',
        stack: 'ReactJs, Redux, Firebase',
        description:
          'Study app from my Udemy React Course. An app to make & manage orders',
        imageURL: 'images/img-4.jpg',
        projectURL: 'https://bgr-app.herokuapp.com/'
       
      },
      {
        id: 5,
        title: 'Get It Done',
        stack: 'Laravel, VueJs',
        description:
          'Class project to connect businesses of all sizes to freelancers & professionals',
        imageURL: 'images/img-5.jpg',
        projectURL: 'https://github.com/KingMike100/getit'
      },
      {
        id: 6,
        title: 'Streamy',
        stack: 'ReactJs, Redux, OBS',
        description:
          'Study app from another Udemy React course that broadcasts streaming like Twitch',
        imageURL: 'images/img-6.jpg',
        projectURL: 'https://github.com/KingMike100/Streamy'
      },
    ],
  };
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <About />
            <Projects projects={this.state.projects} />
            <Skills />

            <Timeline />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
