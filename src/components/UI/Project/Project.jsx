import React from 'react';
const Project = (props) => {
  const { title, description, stack, backgroundImageURL } = props.project;
  const width = 14;
  return (
    <>
      <div className="col-md-4">
        <div className="services">
          <h5>
            <b>{title}</b>
          </h5>
          <img
            className="card-img-top"
            src="https://source.unsplash.com/random/250x180"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <a href="#" class="btn btn-primary btn-sm">
              View
            </a>
            <span className="badge badge-primary pull-right">{stack}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
