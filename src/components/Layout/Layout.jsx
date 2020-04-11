import React, { Component } from 'react';
import About from '../UI/About'
import Projects from '../UI/Projects'
import Timeline from '../UI/Timeline'
import Sidebar from '../UI/Sidebar'

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <About/>
                        <Projects/>
                        <Timeline/>
                    </div>
                </div>
               
            </div>
         );
    }
}
 
export default Layout;