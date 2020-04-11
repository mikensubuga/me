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
                description: 'This is the description for the RMS System'
            },
            {
                id:2,
                title: 'Stats4SD Resources Report',
                stack: 'React, GCP',
                description: 'This is the description for the Stats4SD Resources Report'
            },
            {
                id:3,
                title: 'ACE Appointment Scheduler',
                stack: 'React, Node',
                description: 'This is the description for the ACE Appointment Scheduler'
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