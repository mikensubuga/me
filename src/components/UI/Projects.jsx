import React, {Component} from 'react';
import Project from './Project/Project'

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
                            {this.props.projects.map((project)=>(
                                <Project id={project.id} project={project}/>
                            ))}
                            
						</div>
						
					</div>
				</section>
            </div>
         );
    }
}
 
export default Projects;
