import React, { Component } from 'react';
import About from '../UI/About'
import Introduction from '../UI/Introduction'
import Projects from '../UI/Projects'
import Timeline from '../UI/Timeline'
import Sidebar from '../UI/Sidebar'

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <About/>
                <Introduction/>
                <Projects/>
                <Sidebar/>
                <Timeline/>
            </div>
         );
    }
}
 
export default Layout;