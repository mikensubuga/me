import React from 'react';
const Project = (props) => {
    const { title, description, stack, backgroundImageURL} = props.project;
    return ( 
        <div>
            
        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        <div className="project" style={{backgroundImage: backgroundImageURL}}>
            <div className="desc">
                <div className="con">
                    <h3><a href="work.html">{title}</a></h3>
                    <span>{stack}</span>
                    <p>{description}</p>
                    <p className="icon">
                        <span><a href="#"><i className="icon-eye" /> 100</a></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Project;