import React, { Component } from 'react';
import Main from '../Main/Main'

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Main/>
                Layout
                About
                Introduction
                Projects
                Sidebar
                Timeline
            </div>
         );
    }
}
 
export default Layout;