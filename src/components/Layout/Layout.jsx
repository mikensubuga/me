import React, { Component } from 'react';
import About from '../UI/About'
import Projects from '../UI/Projects'
import Timeline from '../UI/Timeline'
import Sidebar from '../UI/Sidebar'

class Layout extends Component {
    state = { 
        projects:[
            {
                id:1,
                title: 'RMS System',
                stack: 'Laravel',
                description: 'This is the description for the RMS System',
                backgroundImageURL: 'url(images/img-1.jpg)'
            },
            {
                id:2,
                title: 'Stats4SD Resources Report',
                stack: 'React, GCP',
                description: 'This is the description for the Stats4SD Resources Report',
                backgroundImageURL: 'url(images/img-2.jpg)'

            },
            {
                id:3,
                title: 'ACE Appointment Scheduler',
                stack: 'React, Node',
                description: 'This is the description for the ACE Appointment Scheduler',
                backgroundImageURL: 'url(images/img-3.jpg)'

            },
            {
                id:4,
                title: 'Burger App',
                stack: 'React, Firebase',
                description: 'This is the description for the Burger App',
                backgroundImageURL: 'url(images/img-4.jpg)'

            },
            {
                id:5,
                title: 'Get It Done',
                stack: 'Laravel',
                description: 'This is the description for Get It Done',
                backgroundImageURL: 'url(images/img-5.jpg)'

            },
            {
                id:6,
                title: 'Streamy',
                stack: 'React',
                description: 'This is the description for the Streamy',
                backgroundImageURL: 'url(images/img-6.jpg)'

            }
        ]
     }
    render() { 
        return ( 
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <About/>
                        <Projects projects={this.state.projects}/>
                        <Timeline/>
                    </div>
                </div>
               
            </div>
         );
    }
}
 
export default Layout;